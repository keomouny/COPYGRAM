const nodemailer = require('nodemailer')

module.exports = {

    send_mail: function () {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'test-simplon@gmail.com',
                pass: 'hello123'
            }
        });
    
        const mailOptions = {
            from: 'test-simplon@gmail.com',
            to: 'ed@gmail.com',
            subject: 'Test',
            text: 'That was easy!'
        };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        
    }

}
