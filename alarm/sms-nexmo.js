const dotenv = require('dotenv').config()
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
})

nexmo.message.sendSms(
    '12018994417',
    '15106858838',
    'Alarm triggered!',
    (err, respData) => {
        if (err) {
            console.error(err)
        } else {
            console.dir(respData)
        }
    }
)