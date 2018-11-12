const dotenv = require('dotenv').config()
const twilio = require('twilio')
const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

client.messages.create({
    body: 'Alarm!',
    to: '+14087289808',
    from: '+18317080991'
}).then((message) => console.log("message sent: " + message.sid))
.done()