import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class EmailSignup extends Component {
  render() {
    return (
        <Mailchimp 
        action='https://gmail.us13.list-manage.com/subscribe/post?u=c7ce9980102109ea2e8fd86cc&amp;id=d5b5367015'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          }
        ]}
        />
    );
  }
}
 
export default EmailSignup;