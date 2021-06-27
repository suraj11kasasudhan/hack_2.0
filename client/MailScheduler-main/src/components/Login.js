import React from 'react'
import axios from 'axios'

class login extends React.Component
{
    state = {
        
        email: '',
        password:'',
        username:''
    }
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if( this.state.username!='' && this.state.email!='' && this.state.password!='')
        {
            axios.post('http://localhost:8080/login',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({username:'',email:'',password:''});
            });
            
           
        }
        window.location = '/create';
    }
    render()
    {
        return(
            <div class="row text-center">
                <div class="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                    <input required onChange={(e)=>this.handleChange(e)} name='username' value={this.state.username} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'350px',marginTop:'40px'}} placeholder="username" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='email' value={this.state.email} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'350px',marginTop:'20px'}} placeholder="Email" class="form-control"/>
                        <input type="password" required onChange={(e)=>this.handleChange(e)} name='password' value={this.state.password} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'350px',marginTop:'20px'}} placeholder="Password" class="form-control"/>
                        <button style={{borderRadius:'10px',fontSize:'19px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'350px',marginTop:'20px',width:'400px'}} class="btn">Login</button>
                    </form>
                </div>
                 
            </div>
        );
    }
}
export default login;