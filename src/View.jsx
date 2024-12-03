import React, { useEffect, useState } from 'react'
import { Form } from '../Form'
import axios from 'axios'

export const View = () => {
 
    const [total,setTotal] = useState([])
    const [editdata,setEditdata] = useState(null)
    const [searchdata,setSearchdata] = useState('')
    

    function handleEdit(datas) {
      setEditdata(datas)
    }

    const fetchdata = async(e)=>{
        await axios.get('https://cc-yp29.onrender.com/gokul/get').then((res)=>setTotal(res.data)).catch((error)=>console.log(error))
    }

  const handledelete = async(datas) =>{
    try {
        await axios.delete(`https://cc-yp29.onrender.com/gokul/get/${datas}`)
        fetchdata()
    } catch (error) {
        console.log(error)
    }
  }

    useEffect(()=>{
     fetchdata()
    },[])

   const filtering = total.filter((filling)=> filling.myname.toLowerCase().includes(searchdata.toLowerCase()))
  
  return (
    <div>View
    <input type="text" value={searchdata} onChange={(event)=>setSearchdata(event.target.value)} />
        {
            filtering.map((dd,index)=>
                <div key={index}>
                   <p>{dd.myname}</p>
                   <p>{dd.myage}</p>
                   <button onClick={()=>handleEdit(dd)}>Edit</button>
                   <button onClick={()=>handledelete(dd._id)}>Delete</button>
                </div>
            )
        }
        <Form editdata={editdata} setTotaldata={setTotal} onrefresh={()=>{setEditdata(null);fetchdata()}} />
    </div>
  )
}

