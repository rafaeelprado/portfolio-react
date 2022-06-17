import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import styled from 'styled-components'

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

    emailjs.sendForm('service_6dow9i1', 'template_portfolio', form.current, 'p8FlWkQlnwrvFA42o')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

return (
  <Form ref={form} onSubmit={sendEmail}>
    <Label>Name</Label>    
    <Input type="text" name="user_name" />    
    <Label>Email</Label>    
    <Input type="email" name="user_email" />    
    <Label>Message</Label>
    <Textarea name="message" />
    <br />    
    <Input type="submit" value="Send" />
  </Form>
);
};
export const Label = styled.label`
font-size: 1.8rem;
    display: flex;    
    align-content: center;    
    margin-right: 5px;            
    padding-right: 5px;
    border-radius: 3px;
    margin-bottom: 5px;
    margin-top: 40px;    
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: .25rem;
`

export const Textarea = styled.textarea`
    height: 16rem;
    width: 105rem;       
    padding: 7px 7px 7px 7px; 
    align-content: center;    
    background: #212d45;
    color: #fff;
    border-radius: .75rem;
    margin-bottom: 1rem;
    border: 0px; 
    
    @media ${props => props.theme.breakpoints.lg} {
        width: 66rem;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 36rem;
  }
`
export const Form = styled.form`
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 4rem;    
    margin-top: -50px;
 `
 export const Input = styled.input`
    position: absolute;    
    align-content: center;
    padding: 7px 7px 7px 7px;
    height: 3rem;        
    color: #fff;
    background: #212d45;
    border-radius: .75rem;
    margin-bottom: 1rem;
    border: 0px;    
    
 `
