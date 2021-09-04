
import TodoList from "./Components/TodoList";
import React from "react";
function App() {
    const [arrayOfGoal, setTodos] = React.useState([
        {id:1, checkbox:false, title:'изучить es6 (for react native)'},
        {id:2, checkbox:false, title:'изучить react (for react native)'},
        {id:3, checkbox:false, title:'изучить react native'}]
    )

    function toggleTodo(id){
        setTodos(
            arrayOfGoal.map(todo=> {
                if (todo.id===id) {
                    todo.checkbox = !todo.checkbox
                }
                return todo
            })
        )
    }

  return (
      <div className="wrapper" >
        <h1>Fast React!</h1>

          <TodoList arrayTodos={arrayOfGoal} onToggle={toggleTodo}/>
      </div>
  )

}

export default App;
