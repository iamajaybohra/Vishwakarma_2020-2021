import React from 'react';
import axios from 'axios';

import '../css/contact.css'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Users : [] , postList : null}
    }
    
    componentDidMount = (e) => {
        axios.get('http://127.0.0.1:5000/getV').then(res => {
            console.log(res.data);
            this.setState({Users : res.data.split(',')});
            

            const DList = this.state.Users.length ? (
                this.state.Users.map(ele => {
                    var arr = ele.split('/')
                    return(
                        <div className = "DList">
                            <div className = "title1">{arr[1]}</div>
                            <div className = "title1">{arr[0]}</div>
                            <div className = "title1">{arr[2]}</div>
                        </div>
                    )
                })
            ) : (
                <p className = "center"> Loading !!!! </p>
            )

            this.setState({
                postList : this.state.Users.length ? (
                    <div className = "PHead">
                        <div className = "PBody">
                            <div className = "title1">Name</div>
                            <div className = "title1">Email</div>
                            <div className = "title1">Prirority</div>
                        </div>
                        <div>
                            <div className = "title1">{DList}</div>
                        </div>
                    </div>
                ) : (
                    <p className = "center"> Loading !!!! </p>
                )
            })
        })
        .catch(err => {
            console.log('Some Error Ocuured!!!');
            console.log(err);
        })
        console.log(this.state.Users.length);
        // if(this.state.Users.length != 0) {
            
        // }
    }
    render()
    {
        return(
            <>
                <div className = "Main">
                    <div className = "TeamName">
                        ADMIN LOGIN
                    </div>
                    {/* <div onClick = {this.handleSubmit} style = {{textAlign : "center" , cursor : "pointer"}}>
                        Click Me!
                    </div> */}
                    <div style = {{border : "1px solid black" , flex : "5"}}>
                        {this.state.postList}
                    </div>
                </div>
            </>
        )
    }
}
export default Contact;