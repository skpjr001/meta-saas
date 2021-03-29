import React, { useState } from 'react'
import WarningContext from './WarningContext';
const WarningProvider = ({children}) => {

  //Show Warning Function with parameters to update warning state
  //warningName - w_name
  //warningMessage - w_message
  const showWarning = (w_name,w_message) => {
    toggleWarning(prevState => {
      return {
        ...prevState,
        warning:{
          status:true,
          name:w_name,
          message:w_message
        }
      }
    })
  }

  //Hide Warning Function to update warning state
  const hideWarning = () => {
    toggleWarning(prevState => {
      return{
        ...prevState,
        warning:{
          status:false,
          name:"",
          message:""
        },
      }
    })
  }


  //Initial warning state
  const initialState = {
    warning : {
      status:false,
      name:"",
      message:""
    },
    showWarning,
    hideWarning
  }

  //Warning state 
  const [warning, toggleWarning] = useState(initialState);

  return (
    <WarningContext.Provider value={warning}>
      {children}
    </WarningContext.Provider>
  )
}

export default WarningProvider;
