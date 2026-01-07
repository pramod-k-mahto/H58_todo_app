import { createContext, useReducer } from "react";
export const TodoContext = createContext();
const initialState = {
  todoItems: [],
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
        alert("Todo Is Added !")
        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      return state;
    }
    case "update": {
      return state;
    }
    case "deleteAll": {
      return state;
    }
    default: {
      return state;
    }
  }
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
