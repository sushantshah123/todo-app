import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo, removeTodo } from '../redux/store';
import { FaRegEdit, FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, todoId }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const handleSave = () => {
    dispatch(updateTodo({ id: todo.id, text: editedText }));
    setEditable(false);
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className='flex items-start justify-start gap-8'>
      {editable ? (
        <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} className='placeholder-black bg-black outline-none'/>
      ) : (
        <div className='flex items-start justify-center gap-2'>
        <span>{todoId+1}.</span>
        <span>{todo.text}</span>
        </div>
      )}
      <div className='flex'>
      <button onClick={editable ? handleSave : handleToggleEdit} className='todo_button'>
        {editable ? <FaSave className='text-blue-800 bg-lime-500 rounded-sm p-1 text-xl'/> : <FaRegEdit className='text-green-800 bg-lime-500 rounded-sm p-1 text-xl'/>}
      </button>
      <button onClick={handleDelete}><AiFillDelete className='text-red-500 bg-lime-500 rounded-sm p-1 text-xl ml-1'/></button>
      </div>
    </div>
  );
};

export default Todo;
