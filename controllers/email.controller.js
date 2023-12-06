import { createTransport } from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

// Create a Nodemailer transporter using SMTP
const transporter = createTransport(
  smtpTransport({
    host: 'your_smtp_host',
    port: 587, // replace with your SMTP port
    auth: {
      user: 'your_smtp_username',
      pass: 'your_smtp_password',
    },
    secure: false, // set to true if your SMTP server requires a secure connection
  })
);

// Function to send an email
const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // Check if required fields are present
    if (!to || !subject || !text) {
      return res.status(400).json({ 
        success: false,
        message: 'Missing required fields' 
      });
    }

    // Define the email options
    const mailOptions = {
      from: 'your_email@example.com',
      to,
      subject,
      text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    });
  }
};

export default { sendEmail };
