import { json } from '@sveltejs/kit';
import { SMTPClient } from 'emailjs';

const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL;
const EMAIL_PASS = import.meta.env.VITE_PASS;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();


  const client = new SMTPClient({
    user: EMAIL_ADDRESS,
    password: EMAIL_PASS,
    host: 'smtp.ionos.es',
    port: 587,
    tls: {
      ciphers: 'SSLv3',
    },
  });

  try {
    await client.sendAsync({
      from: `${data.name} ${data.surname} <${data.email}>`,
      to: 'Simplemente Web <email@simplementewear.com>',
      subject: `Nuevo pedido desde ${data.country}`,
      text: `Nuevo pedido desde ${data.country}`,
      attachment: [
        {
          data: /* html */`
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
              <p>${data.address}</p>
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
          
            <body>
          
          </html>
        `, alternative: true
        }
      ],
    });
  } catch (err) {
    console.error(err);
  }

  return json({ message: "Send ok" });
}