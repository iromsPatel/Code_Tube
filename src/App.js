import CartList from './CodeTube/CartList';
import './Cart.css'
import NavBar from './CodeTube/NavBar';
import './NavBar.css';
import { Component } from 'react';
import CartData from "./CodeTube/CartData";

class  App extends Component {
  constructor(){
    super();
    this.state={
        CartData:CartData,
        count:0
    }
}

toggleFollow=(i)=>{
    const {CartData}=this.state;

    const mid=CartData.indexOf(i);
    CartData[mid].Fallow=!CartData[mid].Fallow;
    
    this.setState({
        CartData:CartData,
    })
}

addToCart=(i)=>{
  let {count}=this.state;
   count+=1;
   this.setState({
    count:count
    })
}

render(){
  const{CartData,count}=this.state;
  return (
    <>
        <NavBar count={count}/>
        <CartList CartData={CartData}
          toggleFollow={this.toggleFollow}
          addToCart ={this.addToCart}

        />
    </>
  )};
}

export default App;
