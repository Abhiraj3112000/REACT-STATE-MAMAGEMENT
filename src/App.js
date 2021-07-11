import React, { useState } from "react";
import "./App.css";

//UNCOMMENT ANY ONE OF THE CODE SNIPPETS BELOW, EACH CODE SNIPPET IS SEPARATED BY FIVE EMPTY LINES 
//UNCOMMENT ONLY ONE AT A TIME, KEEPING ALL OTHERS COMMENTED AND THEN START YOUR PROGRAM.




// function App() {
//   const [count, setCount] = useState(2);
//   return (
//     <div className="App" style={{display:"flex",width:"20%",justifyContent:"space-around"}}>
//      <button onClick={()=>setCount(count+1)}>+</button>
//      <p>{count}</p>
//      <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   );
// }






// function App() {
// const [count, setCount] = useState(2);
//   let compute=(ch,count)=>{
//    return  ch===1?() => setCount(count+1):
//            ()=> setCount(count-1)
//   }
//   return (
//     <div className="App" style={{display:"flex",width:"20%",justifyContent:"space-around"}}>
//      <button onClick={compute(1,count)}>+</button>
//      <p>{count}</p>
//      <button onClick={compute(0,count)}>-</button>
//     </div>
//   );
// }





// function App() {
//   const [count, setCount] = useState(1);
//   function compute(ch,prevCount){
//    return  ch===1?() => setCount(prevCount+1):
//            ()=> setCount(prevCount-1)
//   }
//   return (
//     <div className="App" style={{display:"flex",width:"20%",justifyContent:"space-around"}}>
//      <button onClick={compute(1,count)}>+</button>
//      <p>{count}</p>
//      <button onClick={compute(0,count)}>-</button>
//     </div>
//   );
// }





// function App() {
//   const [count, setCount] = useState(0);
//   function increment(){
//    setCount(prevCount =>prevCount+1)
//   }
//   function decrement(){
//     setCount(prevCount =>prevCount-1)
//    }
//   return (
//     <div className="App" style={{display:"flex",width:"20%",justifyContent:"space-around"}}>
//      <button onClick={increment}>+</button>
//      <p>{count}</p>
//      <button onClick={decrement}>-</button>
//     </div>
//   );
// }





// function App() {
//   const [count, setCount] = useState(0);
//   function increment(){
//    setCount(prevCount =>prevCount+1)
//   }

//   const decrement=()=>
//     setCount(prevCount =>prevCount-1)

//   return (
//     <div className="App" style={{display:"flex",width:"80%",justifyContent:"space-around"}}>
//      <button onClick={increment} style={{width:"50px",height:"50px"}}>+</button>
//      <p>{count}</p>
//      <button onClick={decrement} style={{width:"50px",height:"50px"}}>-</button>
//     </div>
//   );
// }





// function App() {
//   const [state, setState] = useState({
//     count: 40,
//     purpose: "demo",
//   });
//  const count=state.count;
//  const purpose=state.purpose;

//   function increment() {
//     setState(prevState => {
//       return { ...prevState,count: prevState.count + 1 };
//     });
//   }

//  function decrement() {
//     setState(prevState => {
//       return { ...prevState,count: prevState.count - 1 };
//     });
//   }

//   return (
//     <div
//       className="App"
//       style={{ display: "flex", width: "80%", justifyContent: "space-around" }}
//     >
//       <button onClick={increment} style={{ width: "50px", height: "50px" }}>
//         +
//       </button>
//       <p>{count}{" "}{purpose}</p>
//       <button onClick={decrement} style={{ width: "50px", height: "50px" }}>
//         -
//       </button>
//     </div>
//   );
// }






// class App extends React.Component {
//     constructor(props) {
//     super(props)
//     this.state = { count: 0, purpose:"demo"}
//     }

//     increment=()=>
//       this.setState({count : this.state.count+1})

//     decrement=()=>
//       this.setState({count : this.state.count-1})

//     render(){
//     return(
//       <div className="App" style={{display:"flex",width:"80%",justifyContent:"space-around"}}>
//             <button onClick={this.increment} style={{width:"50px",height:"50px"}}>+</button>
//             <p>{this.state.count}{" "}{this.state.purpose}</p>
//             <button onClick={this.decrement} style={{width:"50px",height:"50px"}}>-</button>
//       </div>
//     )
//     }
// }




const InitialState={
  count:0
}
class App extends React.Component {
  state ={...InitialState};

  increment=()=>
    this.setState({count : this.state.count+1})

  decrement=()=>
    this.setState({count : this.state.count-1})

  render(){
   const { count } = this.state;
    return(
      <div className="App" style={{display:"flex",width:"80%",justifyContent:"space-around"}}>
            <button onClick={this.increment} style={{width:"50px",height:"50px"}}>+</button>
            <p>{count}</p>
            <button onClick={this.decrement} style={{width:"50px",height:"50px"}}>-</button>
          </div>
    )
  }
}

export default App;
