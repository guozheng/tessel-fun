const dotenv = require('dotenv').config()
const client = require('@sendgrid/mail')
client.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'pokerdragon888@yahoo.com',
    from: 'pokerdragon888@yahoo.com',
    subject: 'Testing from SendGrid',
    text: 'Alarm triggered!',
    html: '<strong>Alarm triggered!</strong>'
}

client.send(msg)
console.log('Email sent!')