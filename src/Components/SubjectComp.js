import React from 'react';
import inbox from '../Data/inbox.json';
import spam from '../Data/spam.json';
import Button from '@material-ui/core/Button';
import '../Css/Test.css';
import { makeStyles } from '@material-ui/core/styles';

function SubjectComp(props) {
   const useStyles = makeStyles(theme => ({
      root: props => ({
        backgroundColor: props.backgroundColor,
        color: theme.color,
      }),
    }));
console.log("===inboxdata=>",inbox);
console.log("===spamdata=>",spam);
console.log("===props.type=>",props.type);




 let testArray = [];

 if(props.type === "inbox"){
    testArray = inbox;
 }else if(props.type === "spam"){
    testArray = spam;
 }else{
    testArray = [];
 }
 var tableStyle = {
    "border": "1px solid black",
    "overflow": "scroll",
    "width":"100%",
    "height":"350px"
    
     
 };
    return (
        <div className="divclass" >
            <table style={tableStyle} >
            <th>Filter</th>
            <th>Other</th>
            { testArray && testArray.map((inboxMail) => (
                <tr > <td ><Button backgroun color="primary"  onClick = {()=> props.setContent(inboxMail.content)} > {inboxMail.subject}   &nbsp;  </Button> </td> </tr>
            ))}
            
            </table> 
        </div> 
    )
}

export default SubjectComp

