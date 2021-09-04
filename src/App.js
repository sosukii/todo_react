import TodoList from "./Components/TodoList";
function App() {
    const arrayOfGoal=[
        {id:1, checkbox:false, title:'изучить es6 (for react native)'},
        {id:2, checkbox:false, title:'изучить react (for react native)'},
        {id:3, checkbox:false, title:'изучить react native'}
    ]

  return (
      <div className="wrapper" >
        <h1>Fast React!</h1>

          <TodoList arrayTodos={arrayOfGoal} />
      </div>
  )

}

export default App;
