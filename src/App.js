import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledAccordions from './Components/ControlledAccordions';
import Menubar from './Components/Menubar';
import ButtonAppBar from './Components/ButtonAppBar';
import SubjectComp from './Components/SubjectComp';
import ContentComp from './Components/ContentComp';
import SearchComp from './Components/SearchComp';

function App() {
  const [typeOfMail, setTypeOfMail] = React.useState(""); 
  const [typeOfContent, setTypeOfContent] = React.useState(""); 
  console.log("typeOfMail",typeOfMail);
  console.log("typeOfContent",typeOfContent);

  var tableStyle = {
    "border": "1px solid black",
    "width":"100%",
    "height":"350px"
    
  };
  var subStyle = {
    "border": "5px solid black",
    "overflow": "scroll",
    "width":"20%",
    "height":"350px"
    
  };

  return (
    <div className="App">
    
     <div ><ButtonAppBar/></div>
     <div ><SearchComp/></div>
    <div style={{height:"100px"}}>
    <table style={tableStyle}>
    <tr>
    <td style={{width:"20%"}}><ControlledAccordions setTypeMail = {(typ) => {setTypeOfMail(typ)}} /> </td>
    <td  className="subStyle"><SubjectComp type={typeOfMail} setContent= {(cont) => {setTypeOfContent(cont)}}/> </td>
    <td style={{width:"60%",borderStyle:"solid"}}><ContentComp typeCont={typeOfContent}/> </td>
    </tr> 
    </table>
    </div>
  
    </div>
  );
}

export default App;
