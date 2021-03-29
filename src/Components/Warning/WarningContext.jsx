import React, {createContext} from 'react'


//WarningContext Initial State Object
const WarningContext = createContext({
  
  warning: {
    status:false,
    name:"",
    message:""
  },
  showWarning: (w_name, w_message) => {},
  hideWarning: () => {}
});











export default WarningContext;

