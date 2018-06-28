// Load the SDK
const AWS = require('aws-sdk')
const Fs = require('fs')

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1',
    accessKeyId: 'AKxxxx',
    secretAccessKey: 'J9xxx+D+sUjvwEqBwQwYP30OE'
	
})

const s3 = new AWS.S3({
	accessKeyId: 'AKxxx',
   	secretAccessKey: 'J9xxx+D+sUjvwEqBwQwYP30OE'
});

let pollyparams = {
    'Text': '<speak>Hello, this is an example Node.js script which plays an audio stream converted by AWS Polly. <amazon:effect name="whispered"><prosody rate="slow">It is really cool.</prosody></amazon:effect></speak>',
    'TextType': "ssml", 
    'OutputFormat': 'mp3',
    'VoiceId': 'Amy'
}

Polly.synthesizeSpeech(pollyparams, (err, data) => {
    if (err) {
        console.log(err.message)
    } else if (data) {
        let s3params = {
            Body: data.AudioStream, 
            Bucket: "bridge2demobucket/speech/french", 
            Key: "speech.mp3",
            ACL: "public-read"
        };

        s3.upload(s3params, function(err, data) {
            if (err) {
                console.log(err.message);
            } else {    
                console.log(data.Location);
            }
        });
    }
})


let params = {
    'Text': 'Hi, my name is Michael.',
    'OutputFormat': 'mp3',
    'VoiceId': 'Kimberly'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            Fs.writeFile("./speech.mp3", data.AudioStream, function(err) {
                if (err) {
                    return console.log(err)
                }
                console.log("The file was saved!")
            })
        }
    }
})

