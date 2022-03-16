import React, {useState, useEffect} from 'react'
import {TrashIcon, PencilIcon} from '@heroicons/react/outline';
import axios from "axios";

export  function AllQuays() {

    useEffect(() => {
        fetchQuays();
    },[]);

    const [quays,SetQuays] = useState();
    var n = 0;
    const fetchQuays = () => {
        axios.get("http://localhost:3000/getAllQuays",{headers: {'auth-token':localStorage.getItem('token')}})
        .then(res => {
          const quaysData = res.data;
          SetQuays(quaysData);
        })
        .catch((err) => console.log(err.response));
    }

    const DeleteQuay = (id) => {
      axios.delete(`http://localhost:3000/deleteQuay/${id}`,{headers: {'auth-token':localStorage.getItem('token')}})
      .then((res) => console.log(res)).then(fetchQuays)
      .catch((err) => console.log(err.response));
    }

  return (
    <div className="w-96 flex flex-col m-8 bg-white shadow-sm p-4 rounded">
      <h2 className="text-2xl font-semibold mb-8 w-full text-indigo-800 border-b-2 ">All Quays</h2>
      <table class="rounded w-full">
        <thead className="bg-gray-50 text-indigo-800 font-bold border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-bold tracking-wide text-left">N°</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Reference</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Status</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {!quays && (<div>loading ...</div>)}
          {quays && quays.map((item) =>(
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">{++n}</td>
              <td className="p-3 text-sm text-gray-700">{item.reference}</td>
              <td className="p-3 text-sm text-gray-700">{!item.status ? (<p className="rounded bg-green-200 text-center w-16 p-1">dispo</p>) : <p className="rounded bg-red-300 text-center w-16 p-1">reserved</p>}</td>
              <td className="p-3 text-sm flex">
                <PencilIcon className="text-indigo-800" />
                <TrashIcon className="text-red-800" onClick={() => DeleteQuay(item._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
