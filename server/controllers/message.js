// Archivos de modelos
const Message = require("../models/message");

// URL: POST /api/message/send
module.exports.sendMessage = function (req, res) {
  // Verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  } else {
    // Guardar id de usuario en variable
    const fromPhone_var = req.session.phone;

    // Obtener datos del formulario
    const toPhone_var = req.body.phone;
    const message_var = req.body.message;

    // Hora actual
    const date_var = new Date();

    // Validar datos
    if (!toPhone_var || !message_var) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Evitar que usuario se envie mensajes a si mismo
    if (fromPhone_var == toPhone_var) {
      res.status(400).send("No puedes enviarte mensajes a ti mismo.");
      return;
    }

    // Crear mensaje
    const newMessage = new Message({
      fromPhone: fromPhone_var,
      toPhone: toPhone_var,
      message: message_var,
      date: date_var,
    });

    // Guardar mensaje en base de datos
    newMessage
      .save()
      .then(() => {
        console.log(
          "[controllers/message.sendMessage] Mensaje enviado desde " +
            fromPhone_var +
            " a " +
            toPhone_var +
            "."
        );
        res.send(newMessage);
      })
      .catch((err) => {
        console.log("[controllers/message.sendMessage] Error al enviar mensaje." + err);
        res.status(500).send("Error al enviar mensaje.");
      });
  }
};

// URL: GET /api/message/list/:phone
module.exports.getMessages = function (req, res) {
  // Verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  }

  // Obtener id de usuario de la sesion
  const userPhone_var = req.session.phone;
  const contactPhone_var = req.params.phone;

  // Buscar mensajes con el contacto en la base de datos
  Message.find({ fromPhone: userPhone_var, toPhone: contactPhone_var })
    .then((messages) => {
      // messages: arreglo de mensajes desde el usuario a un contacto

      // Extraer unicamente los campos 'fromPhone', 'toPhone', 'message' y 'date'.
      messages = messages.map((message) => {
        return {
          fromPhone: message.fromPhone,
          toPhone: message.toPhone,
          message: message.message,
          date: message.date,
        };
      });

      // Buscar mensajes desde el contacto al usuario en la base de datos
      Message.find({ fromPhone: contactPhone_var, toPhone: userPhone_var })
        .then((messages2) => {
          // messages2: arreglo de mensajes desde el contacto al usuario

          // Extraer unicamente los campos 'fromPhone', 'toPhone', 'message' y 'date'.
          messages2 = messages2.map((message) => {
            return {
              fromPhone: message.fromPhone,
              toPhone: message.toPhone,
              message: message.message,
              date: message.date,
            };
          });

          // Concatenar arreglos de mensajes
          const allMessages = messages.concat(messages2);

          // Ordenar mensajes desde la mas nueva a la mas vieja
          allMessages.sort((a, b) => {
            return b.date - a.date;
          });

          console.log(
            "[controllers/message.getMessages] Mensajes obtenidos entre " +
              userPhone_var +
              " y " +
              contactPhone_var +
              "."
          );
          res.send(allMessages);
        })
        .catch((err) => {
          console.log("[controllers/message.getMessages] Error al obtener mensajes." + err);
          res.status(500).send("Error al obtener mensajes.");
        });
    })
    .catch((err) => {
      console.log("[controllers/message.getMessages] Error al obtener mensajes." + err);
      res.status(500).send("Error al obtener mensajes.");
    });
};
