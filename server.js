import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
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

    res.json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`✅ Serveur lancé sur http://localhost:${process.env.PORT}`)
);
