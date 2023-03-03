import React from "react";
 
const Task = () => {
    return(
        <form>
           <input type = "text"   placeholder="Enter a todo..." className="Task-input"/>
           <button className="button-add" type="submit">ADD</button>
        </form>
    )
}
export default Task