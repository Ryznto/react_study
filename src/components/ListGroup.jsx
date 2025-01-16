import { useState } from "react";

// interface Props {
//   items :[];
//   heading: String ;
// }

function ListGroup(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  //event handler
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
    <h1>{props.heading}</h1>
      <ul className="list-group mt-2">
        {/* {items.length === 0 ? <p>No item found.</p> : null } */}
        {props.items.length === 0 && <p>No item found.</p>}
        {props.items.map((item, index) => (
          <li 
            className= {selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
            } key={item} onClick = {() => setSelectedIndex(index)}> {item} </li>
        ))}
        </ul>
    </>
    
    );
  }
  
  



export default ListGroup;
