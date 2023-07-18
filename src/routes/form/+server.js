import { json } from '@sveltejs/kit';
import { SMTPClient } from 'emailjs';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();

  const client = new SMTPClient({
    user: import.meta.env.VITE_EMAIL,
    password: import.meta.env.VITE_PASS,
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
  <style>
  html {
    font-family: sans-serif;
  }

  table {
    font-family: monospace
  }

  td {
    border: 1px solid #999;
    padding: 0.5em 1em;
  }

  tr {
    background: #eee;
  }
  </style>

  <body>
    <h1>Nuevo pedido ⚡</h1>
    <p>Datos del pedido:</p>
    
    <table cellpadding="0" cellspacing="0">
        <tr>
          <td>NOMBRE</td>
          <td>${data.name}</td>
        </tr>
        <tr>
          <td>APPELLIDOS</td>
          <td>${data.surname}</td>
        </tr>
        <tr>
          <td>TELÉFONO</td>
          <td>${data.phone}</td>
        </tr>
        <tr>
          <td>EMAIL</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>DIRECCIÓN DE ENVIO</td>
          <td>${data.address}</td>
        </tr>
        <tr>
          <td>PAÍS</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>MODELO</td>
          <td>${data.model}</td>
        </tr>
        <tr>
          <td>MEDIDA PIERNA</td>
          <td>${data.leg_size}</td>
        </tr>
        <tr>
          <td>MEDIDA CINTURA</td>
          <td>${data.waist_size}</td>
        </tr>
    </table>
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