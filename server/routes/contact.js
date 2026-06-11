const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email sent to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "venki44456@gmail.com",
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr>

        <p>Portfolio Contact Form</p>
      `,
    });

    // Auto reply to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Pallala Venkateswarlu",
      html: `
        <h2>Hello ${name},</h2>

        <p>
          Thank you for reaching out through my portfolio website.
        </p>

        <p>
          I have received your message and will get back to you as soon as possible.
        </p>

        <br/>

        <p>Best Regards,</p>
        <h3>Pallala Venkateswarlu</h3>
        <p>Flutter Developer | Frontend Developer</p>
        <p>Email: venki44456@gmail.com</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

module.exports = router;