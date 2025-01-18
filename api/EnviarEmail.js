import nodemailer from 'nodemailer';
import quickemailverification from 'quickemailverification';

export default async function EnviarEmail(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, correo, telefono, descripcion } = req.body;

    if (!nombre || !apellido || !correo || !telefono || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const apiKey = process.env.VERIFI_EMAIL;

    try {
      const qevClient = quickemailverification.client(apiKey).quickemailverification();

      qevClient.verify(correo, function (err, response) {
        if (err) {
          console.error('Error en la verificación de correo:', err);
          return res.status(500).json({ message: 'Error en la verificación de correo' });
        }

        const { result } = response.body;
        if (result === 'valid') {
          
          enviarCorreo(nombre, apellido, correo, telefono, descripcion, res);
        } else {
          return res.status(400).json({ message: 'Correo electrónico no válido' });
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
      from: process.env.CORREO,
      to: correo,
      subject: `Gracias por contactar conmigo, ${nombre}!`,
      text: `Hola ${nombre},\n\nGracias por tu mensaje. En breve me pondré en contacto contigo para charlar sobre "${descripcion}".\n\nSaludos cordiales!`,
    };

    await transporter.sendMail(mailOptionsForAdmin); 
    await transporter.sendMail(mailOptionsForUser);  

    res.status(200).json({ message: 'Correos enviados exitosamente' });
  } catch (error) {
    console.error('Error al enviar los correos:', error);
    res.status(500).json({ message: 'Error al enviar los correos' });
  }
}
