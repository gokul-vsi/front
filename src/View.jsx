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
        await axios.get('https://bc-oxbl.onrender.com/gokul/get').then((res)=>setTotal(res.data)).catch((error)=>console.log(error))
    }

  const handledelete = async(datas) =>{
    try {
        await axios.delete(`https://bc-oxbl.onrender.com/gokul/get/${datas}`)
        fetchdata()
    } catch (error) {
        console.log(error)
    }
  }

    useEffect(()=>{
     fetchdata()
    },[])

   const filtering = total.filter((filling)=> filling.myname.toLowerCase().includes(searchdata.toLowerCase()))
   console.log(filtering);
   
  
  return (
    <div>
    <div>
      
      
        <h1 className='text-center mt-5 mb-3'>Task Manager</h1>
        </div>
       
  
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {/* <input type="text" className=' d-flex justify-content-center' placeholder='Search' value={searchdata} onChange={(event)=>setSearchdata(event.target.value)} /> */}
            </div>
          </div>
        </div>
        
        <Form editdata={editdata} setTotaldata={setTotal} onrefresh={()=>{setEditdata(null);fetchdata()}} />
        
          <div className="container">
            <div className="row">
            {
            filtering.map((dd,index)=>
              <div className='col-md-3' key={index}>
                <div className='border border-light-subtle p-5 mb-2 mb-md-4 h-75 task'>
                    <p className='text-center'>{dd.myname}</p>
                <p className='text-center'>{dd.myage}</p>
                <div className="d-flex gap-3 mb-2 justify-content-center">
                <button className='btn btn-success' onClick={()=>handleEdit(dd)}>Edit</button>
                <button className='btn btn-danger' onClick={()=>handledelete(dd._id)}>Delete</button>
                    </div>

                </div>
              </div>
            )
        }
            </div>
          </div>
          

      

    </div>
  )
}

