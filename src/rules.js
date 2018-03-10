'use strict'

// Description:
//   Make sure that hubot knows the rules.
//
// Commands:
//   hubot the rules - Make sure hubot still knows the rules.
//
// Notes:
//   DON'T DELETE THIS SCRIPT! ALL ROBAWTS MUST KNOW THE RULES

const rules = [
  '0. Please come on time.',
  '1. Followup guidelines and maintian dicipline.',
  '2. We handle confidential information. Please be careful while handling such info.',
  '3. No Tailgating here .'
  '4. Do your best and leave the rest .'
]

const otherRules = [
  'Mail configuration.',
  'Outgoing SMTP server mail.vibrantasia.com port 587 with STARTTLS.',
  'Incoming IMAP/POP server mail.vibrantasia.com port 143.'
]
const mail = [
  'Mail configuration.',
  'Outgoing SMTP server mail.vibrantasia.com port 587 with STARTTLS.',
  'Incoming IMAP/POP server mail.vibrantasia.com port 143.'
]
const it = [
  'it-support@vibrantasia.com.',
  'Call +91 9845083182.',
  'http://vibrantasia.com/help'
]


module.exports = (robot) => {
  robot.respond(/(what are )?with (three |3 )?(rules|laws|policy)/i, (msg) => {
    const text = msg.message.text
    if (text.match(/chat/i) || text.match(/mail/i)) {
      msg.send(otherRules.join('\n'))
    } else {
      msg.send(rules.join('\n'))
    }
    
    if (text.match(/it/i) || text.match(/support/i)) {
      msg.send(it.join('\n'))
    } else {
      msg.send(rules.join('\n'))
    }
    
  })
}
