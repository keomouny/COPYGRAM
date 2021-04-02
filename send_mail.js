const nodemailer = require('nodemailer')

module.exports = {

    send_mail: function (original_picture, thumbnail_picture) {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'test-simplon@gmail.com',
                pass: process.env.EMAIL_PWD
            }
        });
    
        const mailOptions = {
            from: 'test-simplon@gmail.com',
            to: 'ed@gmail.com',
            subject: 'Test',
            text: 'That was easy!',
            attachments: [{
                filename: original_picture,
                //chemin d'acces car "local"
                path: my_pic,           
            },
            {   
                filename: thumbnail_picture,
                //contenu car il est créé dans la fonciton
                content: my_thumb,            
            }]
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
