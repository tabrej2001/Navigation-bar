import React, { Component } from "react";

class Mydetails extends Component{

    // const {fname,lname,age}=this.props
    render()
    {
        return <h1>My detail is {this.props.name.fname} {this.props.name.lname} and age is {this.props.name.age}</h1>;
    }
}

export default Mydetails;
