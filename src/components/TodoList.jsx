import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';
import { addTodo } from '../redux/store';
import { MdAdd } from "react-icons/md";
import Modal from './Modal';
import { motion } from 'framer-motion';

const TodoList = () => {
  const [openModal, setOpenModal] = useState(false)
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodoText }));
      setNewTodoText('');
    }
  };

  return (
    <>
    <div className='flex flex-col justify-center items-center h-auto w-1/2 bg-black text-white rounded-md mx-auto mt-10 py-10 px-2 gap-8 relative'>
    <h1 className='font-mono text-4xl'>ToDo App</h1>
    <div className='cursor-pointer border-[2px] border-purple-500 p-1' onClick={()=>setOpenModal(true)}>Add Todo</div>
    <div className='flex items-center justify-center gap-1 h-[35px] w-full'>
      <input
      className='h-full w-1/2 placeholder-black rounded-md bg-gray-500'
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo} className='text-red-200 font-extrabold text-2xl h-full w-8 border-[2px] border-purple-500 flex items-center justify-center'><MdAdd /></button>
      </div>
      <div>
        {todos.map((todo, id) => (
          <Todo key={todo.id} todoId={id} todo={todo} />
        ))}
      </div> 
    </div>
      {
        openModal ?
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, ease: 'easeInOut' }}
    className='h-full w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Modal setOpenModal={setOpenModal}/> 
      </motion.div>
      : ""
      }
  
    </>
  );
};

export default TodoList;
