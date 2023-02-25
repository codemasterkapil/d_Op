import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import  './ContactUs.css'

const Stybox=styled(Box)`
   display:flex;
   flex-direction:column;
   width: 500px;
   margin:auto;
  // margin-top:200px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`

const Input=styled('input')({
   backgroundColor:'#ddd',
   width:'100%',
   height:'40px',
   marginBottom:'30px'
})

const Submit_input=styled('input')({
  backgroundColor: '#ddd',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop:'30px'
})

const Message=styled('textarea')({
  backgroundColor: '#ddd',
  width: '100%', /* Full width */
  padding: '12px', /* Some padding */ 
  border: '1px solid #fff', /* Gray border */
  borderRadius: '4px', /* Rounded borders */
  boxSizing: 'border-box', /* Make sure that padding and width stays in place */
  marginTop: '6px', /* Add a top margin */
  marginBottom: '16px', /* Bottom margin */
  resize: 'both' /* Both horizontal and vertical resize */
})

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a04l5an', 'template_78k1pqt', form.current, 'VzpGU90niv85tt3zK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='wrapper'>
      <div className="headline">
          <h1 className="shadow"> Contact Us </h1>
      </div>
    <div>
          <form ref={form} onSubmit={sendEmail} className='form'>
      {/* <Stybox> */}
      <div className="form-group">
         <label>Name</label>
          <Input type="text" name="user_name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <Input type="email" name="user_email" />
        </div>
        
        <div className="form-group">
          <label>Message</label>
          <Message name="message" /> 
        </div>
          <Submit_input type="submit" className="btn" value="Send" />
      {/* </Stybox> */}
      
    </form>
    </div>
    </div>
    
  );
};



  
    