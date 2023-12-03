"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  
  const submitHandler = (e) =>{
    e.preventDefault()
    setMainTask([...MainTask, {title,desc}])
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    console.log(MainTask)
  } 

  const deleteHandler = (i)=>{
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
let rederTask = <h2>No Task Available</h2>

if (MainTask.length>0) {
  rederTask = MainTask.map((t,i)=>{
    return(
    <li key={i}
    className="flex items-center justify-between">
      <div className="flex justify-between mb-5 w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-lg font-semibold">{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    className="bg-red-500 text-white px-4 py-2 rounded
    font-bold">Delete</button>
    </li>
    );
  });
}

  return (
    <>
    <h1 className="
  bg-black
  text-white 
    p-5 
    text-4xl 
    font-bold 
    text-center
    ">My To Do list</h1>
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter your Task"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input 
      type="text" 
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter description here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded">Add Task</button>

    </form>
    <hr />
    <div className="p-8 bg-slate-200">
      <ul>
        {rederTask}
      </ul>
    </div>

    </>
  )
}

export default page