import React from "react";
import {Link} from "react-router-dom"

export const TodoCard= ({item})=>{
    // console.log("itemsss",item);
    return(
        <div style={{border: "1px solid black"}}>
        <h2>{item.title}</h2>
        <div>
            <p style={{border: "1px solid black"}}>{item.todoofficial?"Todo":item.todoothers?"Others":"todopersonal"}</p> <p>{item.date}</p><br />
            <p>{item.description}</p>
        </div>
        <div>
            <h2>Sub-Taasks</h2>
            {item.subarr.map((el,ind)=>{
                return <h3 key={ind}>{el}</h3>
            })}
        </div>
        <Link to={`/create-todo/edit/${item.id}`} >Edit Status</Link>
        </div>
    )
}

// "todoofficial": false,
//       "todoothers": true,
//       "todopersonal": false,