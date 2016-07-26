var emailApp = {
    name: 'Outlook',
    mailboxes: {
        inbox:[
          {
            contact: 'Tom Glen',
            subject: 'Pipeline',
            body: 'Please send the most recent project ship dates and pipeline from now to EOY',
        },
          {
            contact: 'John Balm',
            subject: 'Update Call',
            body: 'Does 3:30 pm eastern work for the follow up to our last talk?'
          },
        ],

        drafts: [
          {
            contact: 'John Balm',
            subject: 'Unknwon',
            body: 'This needs to be taken care of',
          },
          {
            contact: 'HPC',
            subject: 'Marketing Plan',
            body: 'What is going to be the cost of the marketing plan created',
          },
        ],
        Sent_Items:[
          {
            contact: 'Marshall Mathers',
            subject: 'Rap God',
            body: 'I am the best',
          },
        ],
      },
    archived: [
        '2016',
        '2015',
        'Partners/Resellers',
        'Comission',
        'Customers',
    ],
    contacts: [
        {name: 'John Balm', messagehistory: 'Please set up a call for today at 5'},
        {name: 'John Perrine', messagehistory: 'How are the shipping the devices to the account?'},
        {name: 'Jordan Howard', messagehistory: 'Just got of the phone with Steve and it has shipped'},
    ],
  }
console.log(emailApp.archived)  // list of archived inbox names
console.log(emailApp.mailboxes.inbox);   //list of emails
console.log(emailApp.mailboxes.inbox[1]);  //2nd email from list
//Mark an Email as Sent

x = emailApp.mailboxes.drafts.pop();
emailApp.mailboxes.Sent_Items.push(x);
console.log(emailApp.mailboxes.Sent_Items);

//add email to Draft
var draftemail = {
  contact: 'Dave Cote',
  subject: 'Dont Respond',
  body: 'This is an important email',
};
emailApp.mailboxes.drafts.push(draftemail);
console.log(emailApp.mailboxes.drafts);
console.log(emailApp.mailboxes.drafts[1]);
