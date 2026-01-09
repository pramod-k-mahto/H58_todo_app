import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoProvider";

function EditTodo() {
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state);
  const [title, setTitle] = useState(state.title);
  const [titleError, setTitleError] = useState("");
  const { dispatch } = useContext(TodoContext);

  return (
    <div>
      <h1 className="text-2xl   font-bold text-orange-600  text-center mt-7">
        {" "}
        Edit Todo{" "}
      </h1>
      <div className=" p-5  space-x-3 flex  justify-center ">
        <div>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                dispatch({
                  type: "update",
                  payload: {
                    id: state.id,
                    title: title,
                  },
                });

                setTitle("");
                setTitleError("");
              }
            }}
            value={title}
            className="outline-none border w-[400px] p-3 h-12 rounded-sm"
            type="text"
            placeholder="Enter todo..."
          />
          {titleError.length > 0 && (
            <p className="text-red-600 italic p-2">{titleError}</p>
          )}
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "update",
              payload: {
                id: state.id,
                title: title,
              },
            });

            navigate("/todo");
          }}
          className="bg-orange-500 text-white w-20 rounded-md  h-12"
        >
          Edit todo
        </button>
      </div>
    </div>
  );
}

export default EditTodo;
