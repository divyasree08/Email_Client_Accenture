import React from 'react'
import inbox from '../Data/inbox.json';
import spam from '../Data/spam.json';
import '../App.css';

function ContentComp(props) {
    return (
        <div className="ContStyle">
          <p>{props.typeCont}</p>  
        </div>
    )
}

export default ContentComp
