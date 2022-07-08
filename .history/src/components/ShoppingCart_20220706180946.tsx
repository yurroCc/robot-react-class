import React from "react";
import styles from "./ShoppingCart.module.css";
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
  }
  handleClick(){
    
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={() => {
            
          }}
        >
          购物车2(件)</button>
        <div className={styles.cartDropDown}
          style={
            { display: this.state.isOpen ? "block" : "none" }
          }
        >
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div >
    )
  }
}

export default ShoppingCart