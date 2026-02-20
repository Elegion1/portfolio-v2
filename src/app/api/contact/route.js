import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Spostiamo il parsing dentro il try per sicurezza
    const { name, email, message, extra } = await req.json();

    // LOG DI DEBUG INIZIALE
    console.log(`[CONTACT FORM] Ricevuta richiesta da: ${email}`);

    // LOGICA HONEYPOT
    if (extra) {
      // Logghiamo i dettagli del bot nel terminale (non nell'email!)
      console.warn("⚠️ BOT RILEVATO! Messaggio bloccato:", {
        nome: name,
        email: email,
        contenutoHoneypot: extra,
      });

      // Rispondiamo con 200 e success:true per "illudere" il bot
      return new Response(JSON.stringify({ success: true, bot: true }), {
        status: 200,
      });
    }

    // Se arriviamo qui, il controllo honeypot è passato
    console.log("✅ Controllo passato. Configurazione Mailer...");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailToOwner = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Nuovo messaggio dal sito Giovanni Sugamiele`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio:\n${message}`,
    };

    const mailToClient = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Riepilogo del tuo messaggio`,
      text: `Ciao ${name},\nabbiamo ricevuto il tuo messaggio:\n"${message}"\nTi risponderò il prima possibile.\n\nGiovanni Sugamiele`,
    };

    // Invio effettivo
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToClient);

    console.log("🚀 Email inviate con successo!");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log dell'errore tecnico (es. credenziali SMTP errate)
    console.error("❌ ERRORE NEL BACKEND:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: "Errore interno al server" }),
      { status: 500 },
    );
  }
}
