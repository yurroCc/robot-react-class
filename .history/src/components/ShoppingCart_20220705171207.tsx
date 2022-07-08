import React from "react";
interface Props{

}
interface State{
  isOpen: boolean;
}
class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render(): React.ReactNode {
      return(
        <div>
          <button>购物车2(件)</button>
        </div>
      )
  }
}