
import React from "react";
import styles from "./ShoppingCart.module.css";
import {FiShoppingCart} from "react-icons/fi"
interface Props {

}
interface State {
  isOpen: boolean;
}
class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e", e);
    console.log("e.currentTarget", e.currentTarget);
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen })
    }
   
  }
  render() {
    <appContext.Consumer>
      {
        (value)=>{

        }
      }
    </appContext.Consumer>
    
  }
}

export default ShoppingCart