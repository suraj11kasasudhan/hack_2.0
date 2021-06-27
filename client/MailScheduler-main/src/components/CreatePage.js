import React, { useState } from 'react'
import '../css/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
 
import {NavLink} from 'react-router-dom'

class CreatePage extends React.Component
{
    state = {
        toEmail: '',
        CCEmail: '',
        subject: '',
        mailBody: ''
    }
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.toEmail!='' && this.state.CCEmail!='' && this.state.subject!='' && this.state.mailBody)
        {
            axios.post('http://localhost:8080/send_mail',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({toEmail:'',CCEmail:'',subject:'',mailBody:''});
            });
            
           
        }
        window.location = '/create';
    }
    render()
    {
        return (
            <div className='main-page'>
                <div className='form-container'>
                    <div className='form-content-right'>
    
                        <form method="POST" className='form'>
    
                            <h1 className="text-center">
                                Compose Mail
                            </h1>
    
    
                            <div className='form-inputs'>
                                <label className='form-label'>To</label>
                                <input
                                    className='form-input'
                                    type='email'
                                    name='toEmail'
                                    placeholder='Email Address'
                                    value={this.state.toEmail}
                                    onChange={(e)=>this.handleChange(e)}
    
                                />
    
                            </div>
    
                            <div className='form-inputs'>
                                <label className='form-label'>CC</label>
                                <input
                                    className='form-input'
                                    type='email'
                                    name='CCEmail'
                                    placeholder='Enter Multiple Email Addresses in CC'
                                    multiple
                                    value={this.state.CCEmail}
                                    onChange={(e)=>this.handleChange(e)}
                                />
    
    
                            </div>
                            <div className='form-inputs'>
                                <label className='form-label'>Subject</label>
                                <input
                                    className='form-input'
                                    type='text'
                                    name='subject'
                                    placeholder='Enter Subject of Email'
                                    value={this.state.subject}
                                    onChange={(e)=>this.handleChange(e)}
                                />
    
    
    
                            </div>
    
                            <div className='form-inputs'>
                                <label className='form-label'></label>
                                <DropdownButton
                                    alignRight
                                    title="Select your Schedule"
                                    id="dropdown-menu-align-right"
                                    
                                    onSelect={(e)=>this.handleSelect(e)}
                                >
                                    <Dropdown.Item eventKey="Recurring">Recurring Schedule (1 minute)</Dropdown.Item>
                                    <Dropdown.Item eventKey="Weekly">Weekly schedule</Dropdown.Item>
                                    <Dropdown.Item eventKey="Monthly">Monthly schedule</Dropdown.Item>
                                    <Dropdown.Item eventKey="Yearly">Yearly schedule</Dropdown.Item>
                                </DropdownButton>
                            </div>
    
                            <div className='form-inputs'>
                                <label className='form-label'>Mail Body (Enter Text)</label>
                                <textarea
                                    rows="2"
                                    cols="52"
                                    name="mailBody"
                                    value={this.state.mailBody}
                                    onChange={(e)=>this.handleChange(e)}>
    
                                </textarea>
    
                            </div>
    
                            <button className='form-input-btn' type='submit' onSubmit={()=>this.handleSubmit()} >
                                Send Mail
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    
    
    
    
    
        )
    }
}
export default CreatePage;