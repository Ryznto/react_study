import React from 'react'

// interface Props {
//     children: ReactNode;
//     onClick:  () => void;
// }

const Alert = ({children, onClick} =  Props) => {
  return (
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <children>Holy guacamole!</children> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
  </div>
  )
}

export default Alert