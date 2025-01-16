import React, { useState } from "react";
import MyButton from "./components/button.jsx";
import  Alert  from "./components/alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <MyButton color="primary" onClick={() => setAlertVisibility(true)}>My button</MyButton>
      <MyButton color="secondary" onClick={() => setAlertVisibility(true)}>My button</MyButton>
      <MyButton color="dark" onClick={() => setAlertVisibility(true)}>My button</MyButton>
    </div> 
  )
}

export default App;


// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["England", "Rusia", "Japan", "Mexico", "Egypt"];
//   let city = ["Tokyo", "Cianjur", "New York", "Los Santos", "Los Angeles"];

//   return (
//     <div>
//       <ListGroup heading="Negara" items={items} />
//       <ListGroup heading="Kota" items={city} />
//     </div>
//   );
// }

// export default App;

// import Message  from "./Message";
// import ListGroup from "./components/ListGroup";
// import ListKota from "./components/listKota";

// function App() {
//   let items = ["England", "Rusia", "Japan", "Mexico", "Egypt"];
//   let city = ["Tokyo", "Cianjur", "New yorh", "Losantos", "los angles"];
  
//   return 
//   <div>
//     <ListGroup heading="Containers" items={items}/>
//     <ListGroup heading="Containers" items={}/>
//   </div>

  
// }

// export default App

