import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || "Contact Form Message",
      replyTo: email,
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
       <h2>Hello ${name},</h2>
      <p>Thank you for reaching out to me.</p>
      <p>I have received your message and will get back to you as soon as possible.</p>
      <br/>
      <p>Best regards,</p>
      <p><b>Veeramreddy Nehareddy</b></p>
    `});

    return res.status(200).json({ message: "Message sent successfully ✅" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error sending message ❌" });
  }
}