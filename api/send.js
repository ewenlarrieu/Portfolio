import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Méthode non autorisée" });
  }

  const { nom, prenom, email, message } = req.body;

  if (!nom || !prenom || !email || !message) {
    return res.status(400).json({ success: false, error: "Champs manquants" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Message de ${nom} ${prenom}`,
      text: `
        Nom : ${nom}
        Prénom : ${prenom}
        Email : ${email}
        Message :
        ${message}
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
}
