const nodemailer = require('nodemailer');

const sendEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS // Use Google App Password here
            }
        });

        const mailOptions = {
            from: '"KL SnapSwap" <no-reply@klsnapswap.com>',
            to: email,
            subject: 'Verify Your Account - OTP',
            text: `Your verification code is: ${otp}. It expires in 10 minutes.`
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email error: ", error);
    }
};

module.exports = sendEmail;