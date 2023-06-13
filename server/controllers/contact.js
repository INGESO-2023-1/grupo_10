// Archivos de modelos
const User = require("../models/user");
const Contact = require("../models/contact");

// URL: POST /api/contact/add
module.exports.addContact = function (req, res) {
  // Verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  } else {
    // Guardar id de usuario en variable
    const phone_var = req.session.phone;

    // Obtener datos del formulario
    const contact_phone = req.body.phone;

    // Validar datos
    if (!contact_phone) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Verificar que el usuario no posea lista de contactos
    Contact.findOne({ phone: phone_var }).then((contact) => {
      if (contact) {
        console.log(
          "[controllers/contact.addContact] Usuario ya posee lista de contactos. Añadiendo contacto."
        );
        // Agregar contacto a lista de contactos
        Contact.updateOne({ phone: phone_var }, { $push: { contacts: contact_phone } })
          .then((contact) => {
            res.send(contact);
          })
          .catch((err) => {
            console.error(err);
          });
        return;
      }

      console.log(
        "[controllers/contact.addContact] Usuario no posee lista de contactos. Creando lista de contactos."
      );
      // Crear lista de contactos
      const newContact = new Contact({
        phone: phone_var,
        contacts: [contact_phone],
      });

      // Guardar lista de contactos en base de datos
      newContact
        .save()
        .then(() => {
          res.send(newContact);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
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
    const phone_var = req.session.phone;

    // Obtener datos del formulario
    const phone_delete = req.body.phone;

    // Validar datos
    if (!phone_delete) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Verificar que el usuario posea lista de contactos
    Contact.findOne({ phone: phone_var }).then((contact) => {
      if (!contact) {
        console.log("[controllers/contact.removeContact] Usuario no posee lista de contactos.");
        res.status(404).send("Usuario no posee lista de contactos.");
        return;
      }

      console.log(
        "[controllers/contact.removeContact] Usuario posee lista de contactos. Removiendo contacto."
      );
      // Remover contacto de lista de contactos
      Contact.updateOne({ phone: phone_var }, { $pull: { contacts: phone_delete } }).then((contact) => {
        res.send(contact);
      });
    });
  }
};
