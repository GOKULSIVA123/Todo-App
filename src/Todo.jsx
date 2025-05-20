import React from 'react'
import { useState } from 'react'

function Todo() {
  const [input,setInput]=useState("");
  const [items,setItems]=useState([])
  const [completeditem,setCompleteditem]=useState([]);
  const [total,setTotal]=useState(0);
  const [editindex,SetEditindex]=useState(null);
  const [edittext,SetEdittext]=useState(true);
  const complete=items.filter((item,id)=>item.completed)
  function submit(e){
    e.preventDefault();
    if(input){
        setItems((prev)=>[...prev,{task:input,completed:false}])
        setInput("")
        
    }    
    console.log(items);
    
  }
  function delete1(index){
    const remove=items.filter((item,id)=>(id!==index))
    setItems(remove)
  }
  function Toggle1(index){
    setItems((prev)=>prev.map((item,id)=>index==id?{...item,completed:true,}:item))

    console.log("completedtasks",completeditem);
    setTotal((t)=>t+=1)
    
    
  }


  return (
    <>
        <div className='w-[100%] h-[100vh] bg-violet-500 flex flex-col justify-center items-center'>
            <div className='w-[40%] h-[80vh] bg-white rounded-lg grid grid-cols-1'>
                <div className='flex flex-col items-center gap-5'>
                <h1 className='text-[18px] font-[600]'>TodoList App</h1>
                <div className='flex flex-row gap-5'>
                <input value={input} type='text' placeholder='Enter Your Todo' className='border-2 border-solid border-black px-4' onChange={(e)=>setInput(e.target.value)}></input>
                <button className='px-4 py-2 bg-black text-white rounded-lg' onClick={submit}>Add</button>
                </div>
                <ul className='flex flex-col gap-3 items-center'>{
                    items.map((item,index)=>(
                        <div key={index} className='flex flex-row justify-between items-center gap-3'>
                        <li onClick={()=>Toggle1(index)} className={item.completed?"line-through":"none"}>{item.task}</li>
                        <button  className='px-2 py-1 bg-black text-white rounded-lg' onClick={()=>delete1(index)}>Delete</button>
                        <button  className='px-2 py-1 bg-black text-white rounded-lg'>Edit</button>
                        </div>
                    ))
                
                }</ul>
                <div className='mt-15'>
                    <h1 className='text-[18px] font-[600]'>Completed Tasks:{total}</h1>
                    <ul>{
                     complete.map((item,index)=>(
                        <div key={index} className='flex flex-row gap-3'>
                        <h1>Task Done:</h1>
                        <li>{item.task}</li>
                        </div>
                     ))
                    }</ul>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo