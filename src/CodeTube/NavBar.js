import { Component } from "react";

class NavBar extends Component{
    render(){
        const{count}=this.props;
        console.log(count);
        return(
            <>
                <div className="outerDiv">
                    <h1>CodeTube</h1>
                    <div className="insideDiv">
                    <img  className ="icon"src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" alt="Bag"/>
                    <span>{count}</span>
                    </div>
                    
                </div>
            </>
        )
    }
}
export default NavBar;