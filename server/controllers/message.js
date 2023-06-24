// Archivos de modelos
const Message = require("../models/message");

// URL: POST /api/message/send/:phone
module.exports.sendMessage = function (req, res) {
  // Verificar que usuario este autenticado en la sesion
  if (!req.session.authenticated) {
    res.status(401).send("Usuario no autenticado.");
    return;
  } else {
    // Guardar id de usuario en variable
    const phone_var = req.session.phone;

    // Obtener datos del formulario
    const contact_phone = req.params.phone;
    const message = req.body.message;

    // Hora actual
    const date = new Date();

    // Validar datos
    if (!contact_phone || !message) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Evitar que usuario se envie mensajes a si mismo
    if (phone_var == contact_phone) {
      res.status(400).send("No puedes enviarte mensajes a ti mismo.");
      return;
    }

    // Crear mensaje
    const newMessage = new Message({
      from: phone_var,
      to: contact_phone,
      message: message,
      date: date,
    });

    // Guardar mensaje en base de datos
    newMessage
      .save()
      .then(() => {
        console.log(
          "[controllers/message.sendMessage] Mensaje enviado desde " +
            phone_var +
            " a " +
            contact_phone +
            "."
        );
        res.send(newMessage);
      })
      .catch((err) => {
        console.log("[controllers/message.sendMessage] Error al enviar mensaje.");
        res.status(500).send("Error al enviar mensaje.");
      });
  }
};
