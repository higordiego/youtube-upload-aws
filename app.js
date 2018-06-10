import { awsUploadImage, searchImage, removeImageAws } from './upload-aws';

const isMagic = async (image, key) => {
    try {
        const data = await searchImage(image)
        const base64Data = new Buffer(data, 'binary');
        return awsUploadImage(base64Data, key)
    } catch (err) {
        Promise.reject(err)
    } 
}

removeImageAws("foto.jpeg")
    .then(response => console.log(response))
    .catch(err => console.log(err));

// isMagic('foto.jpeg', 'foto.jpeg')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))