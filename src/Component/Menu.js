import React from "react";


// Cname:'XYZ Digital Solution',
// about:'About',
// registe:'Register',
// login:'Login',
// careers:'careers'

function Mycompany(props){

    
return(
    <div className="div1">

     <ul className="ul">
     <li><a href="#">{props.name.Cname}</a></li>
     <li>{props.name.about}</li>
     <li>{props.name.register}</li>
     <li>{props.name.login}</li>
     <li>{props.name.careers}</li>
     </ul>

    </div>
    )

}
export default Mycompany;