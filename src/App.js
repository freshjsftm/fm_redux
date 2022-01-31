import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import UserForm from "./components/UserForm";


function App(props) {
  return (
    <div>
      <UserForm />
      <hr/>
     <Counter />
     <hr/>
     <TaskForm />
     <hr/>
     <TodoList />
    </div>
  );
}

export default App;
