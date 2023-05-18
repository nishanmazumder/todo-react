import React from "react";
import ColorContext from "./Color";
import Counter from "./Counter";
import Display from "./Display";
import Box from "./Box";
import Button from "./Button";

class Contxt extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         click: 10,
         theme: "light",
         box: "blue",
         move: 10,
         message: "Box not move yet!"
      };
   }

   Notification = () => {
      return(
         <div style={{color: "red", fontSize: "14px"}}>{this.state.message}</div>
      )
   }



   componentDidUpdate(prevProps, prevState){
      if(this.state.move !== prevState.move){
         if(prevState.move < this.state.move){
            this.setState({message : "Box moving right!"})
         }else{
            this.setState({message : "Box moving left!"})
         }
      }
   }

   boxMoveLeft = () => {
      this.setState((prvState) => ({
         move: prvState.move - 10
      }))
   }

   boxMoveRight = () => {
      this.setState((prvState) => ({
         move: prvState.move + 10
      }))
   }

   render() {
      const { click, box, move } = this.state;

      return (
         <>
            <Counter click={click}>
               {(click, handleClick) => (
                  <Display click={click} handleClick={handleClick} label="Count" />
               )}
            </Counter>

            <this.Notification/>

            <Button handleClick={this.boxMoveLeft} label="<= Move Left"></Button>
            <Button handleClick={this.boxMoveRight} label="Move Right =>"></Button>

            <ColorContext.Provider value={{ theme: box,  move: move}}>
               <Box />
            </ColorContext.Provider>
         </>
      );
   }
}

export default Contxt;
