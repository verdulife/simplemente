import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
// import { SMTPClient } from 'emailjs';

const resend = new Resend(import.meta.env.VITE_RESEND);
/* const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL;
const EMAIL_PASS = import.meta.env.VITE_PASS; */

const ui = {
  es: {
    title: "Hola 👋 ",
    line1: "¡Muchas gracias por tu interés en adquirir uno de nuestros modelos simple-mente!",
    line2: "Hemos recibido tu correo electrónico correctamente y nos pondremos en contacto contigo lo antes posible. Mientras tanto, si tienes alguna duda o pregunta, no dudes en ponerte en contacto con nosotros a través de este mismo correo electrónico. Estaremos encantados de ayudarte.",
    line3: "Atentamente, El equipo Simple-mente."
  },
  en: {
    title: "Hello 👋 ",
    line1: "Thank you very much for your interest in purchasing one of our simply-mind models!",
    line2: "We have received your email correctly and we will contact you as soon as possible. In the meantime, if you have any doubts or questions, do not hesitate to contact us through this same email. We will be happy to help you.",
    line3: "Sincerely, The Simple-mente team."
  }
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();
  const email = ui[data.lang];

  /* const client = new SMTPClient({
    user: EMAIL_ADDRESS,
    password: EMAIL_PASS,
    host: 'smtp.ionos.es',
    port: 465,
    ssl: true,
  }); */

  try {

    const { data: ownData, error: ownError } = await resend.emails.send({
      from: 'Simplemente Web <email@mail.simplementewear.com>',
      to: 'Simplemente Web <email@simplementewear.com>',
      subject: `Nuevo pedido desde ${data.country}${data.referal ? ` | ${data.referal}` : ""}`,
      html: `
          <html>

          <head>
            <style>
              html,
              body {
                font-family: sans-serif;
              }
          
              small {
                font-family: monospace;
                color: gray;
              }
          
              p {
                font-weight: bold;
              }
            </style>
          </head>
          
          <body>
            <h1>Nuevo pedido ⚡</h1>
            <p>Referido: <strong>${data.referal || "NO"}</strong></p>
          
            <div>
              <small>NOMBRE</small>
              <p>${data.name}</p>
            </div>
            <hr>
            <div>
              <small>APPELLIDOS</small>
              <p>${data.surname}</small>
            </div>
            <hr>
            <div>
              <small>TELÉFONO</small>
              <p>${data.phone}</p>
            </div>
            <hr>
            <div>
              <small>EMAIL</small>
              <p>${data.email}</p>
            </div>
            <hr>
            <div>
              <small>DIRECCIÓN DE ENVIO</small>
              <p>${data.address}, ${data.city} (${data.cp})</p>
            </div>
            <hr>
            <div>
              <small>PAÍS</small>
              <p>${data.country}</p>
            </div>
            <hr>
            <div>
              <small>MODELO</small>
              <p>${data.model}</p>
            </div>
            <hr>
            <div>
              <small>COLOR</small>
              <p>${data.color}</p>
            </div>
            <hr>
            <div>
              <small>CANTIDAD</small>
              <p>${data.amount}</p>
            </div>
            <hr>
            <div>
              <small>ALTURA DEL CUERPO</small>
              <p>${data.body_height}cm</p>
            </div>
            <hr>
            <div>
              <small>MEDIDA PIERNA</small>
              <p>${data.leg_size}cm</p>
            </div>
            <hr>
            <div>
              <small>MEDIDA CINTURA</small>
              <p>${data.waist_size}cm</p>
            </div>
            <hr>
            <div>
              <small>REFERIDO</small>
              <p>${data.from}</p>
            </div>
            <hr>
            <div>
              <small>OBSERVACIONES</small>
              <p>${data.notes}</p>
            </div>
            <hr>
          
            <body>
          
          </html>
        `
    });

    if (ownError) {
      return console.error({ ownError });
    }

    console.log({ ownData });

    const { data: clientData, error: clientError } = await resend.emails.send({
      from: 'Simplemente Wear™ <email@mail.simplementewear.com>',
      to: `${data.name} ${data.surname} <${data.email}>`,
      subject: `${email.title} ${data.name}`,
      html: `
          <!DOCTYPE HTML
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->

  <!-- Your title goes here -->
  <title>Simplemente Wear™</title>
  <!-- End title -->

  <!-- Start stylesheet -->
  <style type="text/css">
    p,
    p:visited {
      /* Fallback paragraph style */
      font-size: 15px;
      line-height: 24px;
      font-family: 'Helvetica', Arial, sans-serif;
      font-weight: 300;
      text-decoration: none;
      color: #000000;
    }

    h1 {
      /* Fallback heading style */
      font-size: 22px;
      line-height: 24px;
      font-family: 'Helvetica', Arial, sans-serif;
      font-weight: normal;
      text-decoration: none;
      color: #000000;
    }

    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td {
      line-height: 100%;
    }

    .ExternalClass {
      width: 100%;
    }
  </style>
  <!-- End stylesheet -->

</head>

<!-- You can change background colour here -->

<body
  style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000"
  align="center">

  <!-- Fallback force center content -->
  <div style="text-align: center;">

    <!-- Start container for logo -->
    <table align="center"
      style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
      width="600">
      <tbody>
        <tr>
          <td
            style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;"
            width="596">

            <!-- Your logo is here -->
            <img style="width: 100px; max-width: 100px; height: 100px; max-height: 100px; text-align: center; color: #ffffff;" alt="Simple-mente" src="https://www.simplementewear.com/logo-192.png" align="center" width="100" height="100">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center"
      style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
      width="600">
      <tbody>
        <tr>
          <td
            style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;"
            width="596">

            <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
              ${email.title} ${data.name},
            </h1>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
              ${email.line1}
              <br><br>
              ${email.line2}
              <br><br>
              ${email.line3}
            </p>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End single column section -->
  </div>

</body>

</html>
        `
    });

    if (clientError) {
      return console.error({ clientError });
    }

    console.log({ clientData });


    /* await client.sendAsync({
      from: `${data.name} ${data.surname} <${data.email}>`,
      to: 'Simplemente Web <email@simplementewear.com>',
      subject: `Nuevo pedido desde ${data.country}`,
      text: `Nuevo pedido desde ${data.country}`,
      attachment: [
        {
          data: `
          <html>

          <head>
            <style>
              html,
              body {
                font-family: sans-serif;
              }
          
              small {
                font-family: monospace;
                color: gray;
              }
          
              p {
                font-weight: bold;
              }
            </style>
          </head>
          
          <body>
            <h1>Nuevo pedido ⚡</h1>
          
            <div>
              <small>NOMBRE</small>
              <p>${data.name}</p>
            </div>
            <hr>
            <div>
              <small>APPELLIDOS</small>
              <p>${data.surname}</small>
            </div>
            <hr>
            <div>
              <small>TELÉFONO</small>
              <p>${data.phone}</p>
            </div>
            <hr>
            <div>
              <small>EMAIL</small>
              <p>${data.email}</p>
            </div>
            <hr>
            <div>
              <small>DIRECCIÓN DE ENVIO</small>
              <p>${data.address}, ${data.city} (${data.cp})</p>
            </div>
            <hr>
            <div>
              <small>PAÍS</small>
              <p>${data.country}</p>
            </div>
            <hr>
            <div>
              <small>MODELO</small>
              <p>${data.model}</p>
            </div>
            <hr>
            <div>
              <small>COLOR</small>
              <p>${data.color}</p>
            </div>
            <hr>
            <div>
              <small>CANTIDAD</small>
              <p>${data.amount}</p>
            </div>
            <hr>
            <div>
              <small>MEDIDA PIERNA</small>
              <p>${data.leg_size}</p>
            </div>
            <hr>
            <div>
              <small>MEDIDA CINTURA</small>
              <p>${data.waist_size}</p>
            </div>
            <hr>
            <div>
              <small>REFERIDO</small>
              <p>${data.from}</p>
            </div>
            <hr>
            <div>
              <small>OBSERVACIONES</small>
              <p>${data.notes}</p>
            </div>
            <hr>
          
            <body>
          
          </html>
        `, alternative: true
        }
      ],
    }); */

    /*await client.sendAsync({
      from: 'Simplemente Wear™ <email@simplementewear.com>',
      to: `${data.name} ${data.surname} <${data.email}>`,
      subject: `${email.title} ${data.name}`,
      text: `${email.title} ${data.name}`,
      attachment: [
        {
          data: `
          <!DOCTYPE HTML
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->

  <!-- Your title goes here -->
  <title>Simplemente Wear™</title>
  <!-- End title -->

  <!-- Start stylesheet -->
  <style type="text/css">
    p,
    p:visited {
      font-size: 15px;
      line-height: 24px;
      font-family: 'Helvetica', Arial, sans-serif;
      font-weight: 300;
      text-decoration: none;
      color: #000000;
    }

    h1 {
      font-size: 22px;
      line-height: 24px;
      font-family: 'Helvetica', Arial, sans-serif;
      font-weight: normal;
      text-decoration: none;
      color: #000000;
    }

    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td {
      line-height: 100%;
    }

    .ExternalClass {
      width: 100%;
    }
  </style>
  <!-- End stylesheet -->

</head>

<!-- You can change background colour here -->

<body
  style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000"
  align="center">

  <!-- Fallback force center content -->
  <div style="text-align: center;">

    <!-- Start container for logo -->
    <table align="center"
      style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
      width="600">
      <tbody>
        <tr>
          <td
            style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;"
            width="596">

            <!-- Your logo is here -->
            <img style="width: 100px; max-width: 100px; height: 100px; max-height: 100px; text-align: center; color: #ffffff;" alt="Simple-mente" src="https://www.simplementewear.com/logo-192.png" align="center" width="100" height="100">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center"
      style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
      width="600">
      <tbody>
        <tr>
          <td
            style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;"
            width="596">

            <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
              ${email.title} ${data.name},
            </h1>

            <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
              ${email.line1}
              <br><br>
              ${email.line2}
              <br><br>
              ${email.line3}
            </p>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End single column section -->
  </div>

</body>

</html>
        `, alternative: true
        }
      ],
    }); */
  } catch (err) {
    console.error(err);
  }

  return json({ message: "Send ok" });
}