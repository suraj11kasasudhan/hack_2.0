import React from 'react'
import axios from 'axios'


class HistoryPage extends React.Component
{
    state = {
        username : '',
        email: '',
        password:''
    }
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.username!='' && this.state.email!='' && this.state.password!='')
        {
            axios.post('http://localhost:8080/history',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({username:'',email:'',password:''});
            });
            
           
        }
        window.location = '/create';
    }
    render()
    {
        return (
       


            <>
                <div className="home-page">
                    <h1 className="text-center text-black mt-3">Sent Box</h1>
                    <div className="card mt-5">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>To whom</h6>
                                <h6>Message</h6>
                                <h6>date</h6>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default HistoryPage;



 

