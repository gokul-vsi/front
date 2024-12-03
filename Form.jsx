import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Form = ({editdata,setTotal,onrefresh}) => {

    const[myname,setMyname] = useState('');
    const[myage,setMyage] = useState('');


   useEffect(()=>{
    
   if(editdata)
   {
    setMyname(editdata.myname);
    setMyage(editdata.myage)
   }
   else{
    setMyname('')
    setMyage('')
   }
},[editdata]) 



    const handlesubmit = async(e)=>{
        e.preventDefault();
        const alldata = {myname,myage};
        if (editdata) {
          await axios.put(`https://cc-yp29.onrender.com/gokul/get/${editdata._id}`,alldata)
        } else {
          await axios.post('https://cc-yp29.onrender.com/gokul',alldata)
        }
        onrefresh()
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='enter your name' value={myname} onChange={(event)=>setMyname(event.target.value)} />
            <input type="text" placeholder='enter your name' value={myage} onChange={(event)=>setMyage(event.target.value)} />
            <input type="submit" />

        </form>
    </div>
  )
}
