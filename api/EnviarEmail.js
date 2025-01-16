import nodemailer from 'nodemailer';

export default async function EnviarEmail(req, res) {
  if (req.method === 'POST')
     {
    const { nombre, apellido, correo, telefono, descripcion } = req.body;

    if (!nombre || !apellido || !correo || !telefono || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
      // Configura el transporte para nodemailer
      const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: process.env.CORREO, 
          pass: process.env.CONTRASENA, 
        },
      });

      // Configura el correo
      const mailOptions = {
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

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
