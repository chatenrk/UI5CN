using LMSService as LMS from '../../../srv/service';

annotate LMS.Students @(UI : {
    SelectionFields : [
    email,
    first_name
    ],
    LineItem        : [
    {
        Value : email,
        Label : 'email'
    },
    {
        Value : first_name,
        Label : 'first_name'
    },
    {
        Value : last_name,
        Label : 'last_name'
    },
    {
        Value : date_sign_up,
        Label : 'date_sign_up'
    }
    ],
    HeaderInfo      : {
        Title       : {Value : email},
        Description : {Value : first_name}
    }
});
