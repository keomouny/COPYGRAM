const nodemailer = require('nodemailer')

module.exports = {

    send_mail: function (original_picture, thumbnail_picture) {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'test-simplon@gmail.com',
                pass: 'hello123!'
            }
        });
    
        const mailOptions = {
            from: 'test-simplon@gmail.com',
            to: 'eddy@gmail.com',
            subject: 'Test',
            text: 'That was easy!',
            attachments: [{
                filename: 'original_picture',
                //chemin d'acces car "local"
                path: original_picture,           
            },
            {   
                filename: 'thumbnail_picture',
                //contenu car il est créé dans la fonciton
                content: thumbnail_picture,            
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