import { Component } from "react";

class Cart extends Component{
   
    render(){
        const { Img,Title, Ploat,Price,ProfileImg,ProfileName,Fallow}=this.props.data;
        
        return(
            <>
                <div className="outerDiv1">
                    <div className="coursePhoto">
                        <img src={Img} alt="Mern Stack Course"/>
                    </div>

                    <div className="insideDiv">
                            <h1>{Title}</h1>

                            <p className="">{Ploat}</p>

                            <p>{ProfileName} </p>

                            <div className="footerPart">
                                <span> {Price}</span>
                                <button onClick={()=>this.props.addToCart(this.props)}>Add to bag</button>
                            </div>
                    </div>
                    
                    <aside className="aside_Part">
                     <img  src={ProfileImg} alt="Code"/>
                     <h1> {ProfileName} </h1>
                     <button onClick={()=>this.props.toggleFollow(this.props.data)}>{Fallow?"Un Follow" :"Follow"}</button>
                   </aside>
                </div>

                
            </>
        )
    }
}
export default Cart;