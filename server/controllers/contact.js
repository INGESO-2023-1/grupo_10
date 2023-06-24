// Archivos de modelos
const Contact = require("../models/contact");

// URL: POST /api/contact/add
module.exports.addContact = function (req, res) {
  // Verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  } else {
    // Guardar id de usuario en variable
    const userPhone_var = req.session.phone;

    // Obtener datos del formulario
    const contactPhone_var = req.body.phone;

    // Validar datos
    if (!contactPhone_var) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Verificar que el contacto no sea el mismo usuario
    if (userPhone_var == contactPhone_var) {
      res.status(400).send("No puedes agregarte a ti mismo como contacto.");
      return;
    }

    // Verificar que el contacto no exista en la lista de contactos
    Contact.findOne({ userPhone: userPhone_var, contactPhone: contactPhone_var })
      .then((contact) => {
        if (contact) {
          console.log("[controllers/contact.addContact] Contacto ya existe en lista de contactos.");
          res.status(400).send("Contacto ya existe en lista de contactos.");
          return;
        } else {
          console.log(
            "[controllers/contact.addContact] Contacto no existe en lista de contactos. Agregando contacto."
          );
          // Agregar contacto
          newContact = new Contact({
            userPhone: userPhone_var,
            contactPhone: contactPhone_var,
          });

          // Guardar contacto en base de datos
          newContact
            .save()
            .then(() => {
              console.log(
                "[controllers/contact.addContact] Contacto " +
                  contactPhone_var +
                  " agregado a " +
                  userPhone_var +
                  "."
              );
              res.send("Contacto agregado.");
            })
            .catch((err) => {
              console.log("[controllers/contact.addContact] Error al agregar contacto.");
              res.status(500).send("Error al agregar contacto.");
            });
        }
      })
      .catch((err) => {
        console.log("[controllers/contact.addContact] Error al buscar contacto.");
        res.status(500).send("Error al buscar contacto.");
      });
  }
};

// URL: POST /api/contact/remove
module.exports.removeContact = function (req, res) {
  // verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  } else {
    // Guardar id de usuario en variable
    const userPhone_var = req.session.phone;

    // Obtener datos del formulario
    const contactPhone_var = req.body.phone;

    // Validar datos
    if (!contactPhone_var) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Verificar que el contacto no sea el mismo usuario
    if (userPhone_var == contactPhone_var) {
      res.status(400).send("No puedes eliminarte a ti mismo como contacto.");
      return;
    }

    // Eliminar contacto
    Contact.findOneAndDelete({ userPhone: userPhone_var, contactPhone: contactPhone_var })
      .then((contact) => {
        if (!contact) {
          console.log(
            "[controllers/contact.removeContact] Contacto no existe en lista de contactos."
          );
          res.status(400).send("Contacto no existe en lista de contactos.");
          return;
        } else {
          console.log(
            "[controllers/contact.removeContact] Contacto " +
              contactPhone_var +
              " eliminado de " +
              userPhone_var +
              "."
          );
          res.send("Contacto eliminado.");
        }
      })
      .catch((err) => {
        console.log("[controllers/contact.removeContact] Error al eliminar contacto.");
        res.status(500).send("Error al eliminar contacto.");
      });
  }
};

// URL: GET /api/contact/list
module.exports.getContacts = function (req, res) {
  // Verificar que haya un usuario en sesion
  if (!req.session.authenticated) {
    res.status(401).send("No hay un usuario en sesion.");
    return;
  } else {
    // Obtener variables
    const userPhone_var = req.session.phone;

    // Lista de contactos
    var contactsList = [];

    // Obtener todos los contactos del usuario dado y guardarlos en una lista
    Contact.find({ userPhone: userPhone_var })
      .then((contacts) => {
        contacts.forEach((contact) => {
          contactsList.push(contact.contactPhone);
        });
      })
      .then(() => {
        // Enviar lista de contactos como JSON
        res.json(contactsList);
      })
      .catch((err) => {
        res.status(500).send("Error al buscar contactos.");
      }
    );
  }
};
