import React from "react"
import Table from 'react-bootstrap/Table';
import { Trash2 } from "react-feather";
import Loader from "../components/Loader";

function History() {
  return (
    <div className="container">
      <Loader></Loader>
      <h1 className="text-center mt-3 mb-3">Watch History</h1>
      <Table className="text-center" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Video</th>
          <th>Date</th>
          <th>Video URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className="text-danger text-center"><Trash2></Trash2></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}
export default History