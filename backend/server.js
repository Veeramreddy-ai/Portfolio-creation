const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "nehaveeramreddy@gmail.com",
                pass: "jvydyheuudmjamuf"
            }
        });

        await transporter.sendMail({
            from: email,
            to: "your-email@gmail.com",
            subject: subject,
            html: `
                <h3>New Contact Message</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `
        });

        res.json({ message: "Message sent successfully ✅" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error sending message ❌" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));