import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { Trash2 } from "react-feather";
import Loader from "../components/Loader";
import { getHistory, removeHistory } from "../service/allapis";

function History() {
  const [allhistories, setHistory]=useState([])
  const getAllHistory = async()=>{
    const result=await getHistory()
    setHistory(result.data);
  }
  const handleDelete=async(id)=>{
    await removeHistory(id)
    getAllHistory()
    
  }
  useEffect(()=>{
    getAllHistory()
  },[])
  return (
    <div className="container">
      
      
      <h1 className="text-center mt-3 mb-3">Watch History</h1>
      <div>
      <Table  className="text-center w-100" striped bordered hover>
      <thead  style={{background:'#ff4365', fontFamily:'cursive'}}>
        <tr>
          <th>#</th>
          <th>Video</th>
          <th>Date</th>
          <th>Video URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
          allhistories.length>0?allhistories.map((i,index)=>(
        
            <tr>
            <td>{index+1}</td>
            <td>{i.title}</td>
            <td>{i.time}</td>
            <td>{i.videoURL}</td>
            <td className="text-danger text-center"><Trash2 onClick={()=>handleDelete(i.id)}></Trash2></td>
          </tr>
          ))
          :<Loader></Loader>
        }
        
        
      </tbody>
    </Table>
      </div>
    </div>
  )
}
export default History