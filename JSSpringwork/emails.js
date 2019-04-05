var appData = {

    name: 'Outlook',
    mailboxes: [
        {name: 'inbox', numofEmails: 45},
        {name: 'sent', numofEmails: 60},
        {name: 'junk', numofEmails: 100},
        {name: 'drafts', numofEmails: 5}
    ],
    contacts: [
        {name: 'Nick', position: 'Process Engineer', company: 'Koch Modular Process'},
        {name: 'Hartmut', position: 'President', company: 'eFactor3'}
    ],
    emails: [
        {type: 'sent', toFrom: 'Nick', subject: 'Controls', timeSent: '4:00pm'},
        {type: 'inbox', toFrom: 'Hartmut', subject: 'Project', timeSent: '11:00am'},
        {type: 'draftS', toFrom: 'not Set', subject: 'Machine', timeSent: 'Not yet sent'}
    ]
}

for(var i = 0; i < appData.mailboxes.length; i ++){

    console.log(appData.mailboxes[i].name);
}

for(var i = 0; i < appData.emails.length; i ++){

    console.log(appData.emails[i]);
}

console.log(appData.emails[2].subject);
appData.emails[2].type = 'Sent';
console.log(appData.emails[2].type);
console.log(appData.mailboxes[3].numofEmails);
appData.mailboxes[3].numofEmails = appData.mailboxes[3].numofEmails + 1;
console.log(appData.mailboxes[3].numofEmails);