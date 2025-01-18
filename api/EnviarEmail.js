import nodemailer from 'nodemailer';
import quickemailverification from 'quickemailverification';

export default async function EnviarEmail(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, correo, telefono, descripcion } = req.body;

    if (!nombre || !apellido || !correo || !telefono || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const apiKey = process.env.VERIFI_EMAIl;

    try {
      const qevClient = quickemailverification.client(apiKey).quickemailverification();

      qevClient.verify(correo, function (err, response) {
        if (err) {
          console.error('Error en la verificación de correo:', err);
          return res.status(500).json({ message: 'Error en la verificación de correo' });
        }
        console.log(response.body)
        const { result } = response.body;
        if (result === 'valid') {
          enviarCorreo(nombre, apellido, correo, telefono, descripcion, res);
        } else {
          return res.status(422).json({ message: 'Correo electrónico no válido' });
        }
        
      });
    } catch (error) {
      console.error('Error al configurar la verificación de correo:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}

async function enviarCorreo(nombre, apellido, correo, telefono, descripcion, res) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.CORREO,
        pass: process.env.CONTRASENA,
      },
    });

    const mailOptionsForAdmin = {
      from: process.env.CORREO,
      to: process.env.CORREO,
      subject: 'Nuevo contacto desde el formulario de PORTFOLIO',
      text: `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Correo: ${correo}
        Teléfono: ${telefono}
        Descripción: ${descripcion}
      `,
    };

    const mailOptionsForUser = {
      from: '"Martin Gonzalez" <gonzalezmartinnatanael@gmail.com>',
      to: correo,
      subject: `¡Gracias por contactarme, ${nombre}!`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #4CAF50;">Hola, ${nombre}!</h2>
          <p>
            Muchas gracias por contactarte conmigo. Estoy muy emocionado por charlar contigo sobre:
          </p>
          <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #4CAF50;">
            ${descripcion}
          </blockquote>
          <p>En breve, me pondré en contacto contigo para coordinar los detalles.</p>
          <p>¡Saludos cordiales!</p>
          <p style="color: #666;">Martin Gonzalez<br>
            <a href="mailto:gonzalezmartinnatanael@gmail.com" style="color: #4CAF50;">gonzalezmartinnatanael@gmail.com</a>
          </p>
          <hr>
          <p style="font-size: 12px; color: #999;">
            Este correo fue generado automáticamente. Si tienes alguna duda, no dudes en escribirme.
          </p>
        </div>
      `,
    };
    

    await transporter.sendMail(mailOptionsForAdmin);
    await transporter.sendMail(mailOptionsForUser);

    res.status(200).json({ message: 'Correos enviados exitosamente' });
  } catch (error) {
    console.error('Error al enviar los correos:', error);
    res.status(500).json({ message: 'Error al enviar los correos' });
  }
}
