const imageThumbnail = require('image-thumbnail');
const handle_mail = require('./send_mail');

module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const {uri} = context.bindingData;
    const {blobTrigger} = context.bindingData;

    const image_thumbnail = await imageThumbnail(myBlob)
    context.bindings.outputBlob = image_thumbnail
    handle_mail.send_mail(myBlob, image_thumbnail)
    
};