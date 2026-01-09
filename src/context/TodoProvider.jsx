import { createContext, useEffect, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
export const TodoContext = createContext();

const getTodo = () => {
  let todos = localStorage.getItem("todoItem");
  return todos ? JSON.parse(todos) : [];
};
const initialState = {
  todoItems: getTodo(), // [{}]
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const isExists = state.todoItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExists) {
        return state;
      } else {
        let newTodoItem = [...state.todoItems, action.payload];
        toast.success("Todo is added !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      // filter
      // todo
      // first get  id of that todo
      // then filter the todo except that todo
      //  return new todo
      const newTodo = state.todoItems.filter((item) => {
        return item.id !== action.payload.id;
      });
       toast.warn("Todo is deleted !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      return {
        todoItems: newTodo,
      };
    }
    case "update": {
      // todo
      // get id and updated title
      // then use map method then up   dated the exact item or todo
      let updatedTodo=state.todoItems.map((item)=>{
        return item.id===action.payload.id?{...item,title:action.payload.title}:item
      })
      return {
        todoItems:updatedTodo
      };
    }
    case "deleteAll": {
      return {
        todoItems:[]
      };
    }
    default: {
      return state;
    }
  }
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(state.todoItems));
  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// localStorage.setItem("name","ram")
// let x=localStorage.getItem("name")
// localStorage.clear()
// console.log(x)
