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
          await axios.put(`https://bc-oxbl.onrender.com/gokul/get/${editdata._id}`,alldata)
        } else {
          await axios.post('https://bc-oxbl.onrender.com/gokul',alldata)
        }
        onrefresh()
    }
  return (
    <div>
            <div className="container d-flex flex-row justify-content-center mb-5 mt-3">
             <div className="row">
              <div className="col-md-12">
              <form onSubmit={handlesubmit}>
            <input type="text" className=' table form-control' placeholder='Enter your Role' value={myname} onChange={(event)=>setMyname(event.target.value)} />
            <input type="text" className='table form-control ' placeholder='Enter your  Today Task ' value={myage} onChange={(event)=>setMyage(event.target.value)} />
            <div className='d-flex justify-content-center'>
            <input type="submit" className='btn btn-primary'  />
            </div>
        </form>
              </div>
             </div>
            </div>
           
    </div>
  )
}
