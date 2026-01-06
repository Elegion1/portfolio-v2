import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email che ricevi tu
  const mailToOwner = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `Nuovo messaggio dal sito Giovanni Sugamiele`,
    text: `
      Nome: ${name}
      Email: ${email}
      Messaggio:
      ${message}
    `,
  };

  // Email di riepilogo da inviare al cliente
  const mailToClient = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Riepilogo del tuo messaggio inviato a Giovanni Sugamiele`,
    text: `
Ciao ${name},

abbiamo ricevuto il tuo messaggio:

"${message}"

Ti rispondereò il prima possibile.
Grazie per avermi contattato!

Giovanni Sugamiele
    `,
  };

  try {
    // prima a te
    await transporter.sendMail(mailToOwner);

    // poi al cliente
    await transporter.sendMail(mailToClient);

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message })
    );
  }
}
