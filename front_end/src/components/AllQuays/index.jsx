import React, {useState, useEffect,useRef} from 'react'
import Modal from 'react-modal';
import { XIcon } from '@heroicons/react/solid';
import {TrashIcon, PencilIcon} from '@heroicons/react/outline';
import axios from "axios";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export  function AllQuays() {
    const reference = useRef("");
    const referenceEdit = useRef("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
    const [modal_data, set_modal_data]=useState(null);
    const [quays,SetQuays] = useState();

    const fetchQuays = () => {
        axios.get("http://localhost:3000/getAllQuays",{headers: {'auth-token':localStorage.getItem('token')}})
        .then(res => {
          const quaysData = res.data;
          SetQuays(quaysData);
        })
        .catch((err) => console.log(err.response));
    }

    useEffect(() => {
        fetchQuays();
    },[]);

    const DeleteQuay = (id) => {
      axios.delete(`http://localhost:3000/deleteQuay/${id}`,{headers: {'auth-token':localStorage.getItem('token')}})
      .then((res) => console.log(res)).then(fetchQuays)
      .catch((err) => console.log(err.response));
    }

    const newQuay = async (e) => {
        e.preventDefault();
        let AddData = {reference: reference.current.value,status: false}
        axios
        .post("http://localhost:3000/addQuay", AddData,{headers: {'auth-token':localStorage.getItem('token')}})
        .then((res) => {console.log(res);
          setIsOpen(false);
         fetchQuays();
        })
        .catch((err) => console.log(err.response));
    }
    const editQuay = (id) => {
      let EditData = {reference: referenceEdit.current.value,id:id}
      axios
      .post("http://localhost:3000/updateQuay", EditData,{headers: {'auth-token':localStorage.getItem('token')}})
      .then((res) => {console.log(res);
        setIsOpenEdit(false);
        fetchQuays();
      })
      .catch((err) => console.log(err.response));
    }

  return (
    <div className="w-96 flex flex-col m-8 bg-white shadow-sm p-4 rounded">
      <div className="flex flex-col">
        <button onClick={()=>{setIsOpen(true)}} className="p-2 self-end">+ New Quay</button>
        <Modal isOpen={modalIsOpen}  onRequestClose={()=>{setIsOpen(false)}} style={customStyles} contentLabel="Example Modal">
            <div className="flex flex-col">
                <div className="flex justify-between px-4">
                <h2 className="font-bold text-gray-600">New Quay</h2>
                <button onClick={()=>{setIsOpen(false)}} className = "self-end p-1"><XIcon className="w-5 h-5"/></button>
                </div>
                <form onSubmit = {newQuay}>
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                        <label htmlFor="reference" className="inline-block sm:text-base mb-4 text-gray-600">Reference :</label>
                        <input type="text" ref={reference} name="reference" required className="w-full bg-gray-50 text-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
                        </div>
                        <button type="submit" className="block bg-indigo-600 hover:border active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 py-2"> Save </button>
                    </div>
                </form>
            </div>
        </Modal>
        </div>
      <h2 className="text-2xl font-semibold mb-8 w-full text-indigo-800 border-b-2 ">All Quays</h2>
      {!quays && (<div>loading ...</div>)}
      <table className ="rounded w-full">
        <thead className="bg-gray-50 text-indigo-800 font-bold border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-bold tracking-wide text-left">N°</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Reference</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Status</th>
            <th className="p-3 text-sm font-bold tracking-wide text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {quays && quays?.map((item,i) =>(
            <tr className="bg-white" key={item._id}>
              <td className="p-3 text-sm text-gray-700">{++i}</td>
              <td className="p-3 text-sm text-gray-700">{item.reference}</td>
              <td className="p-3 text-sm text-gray-700">{!item.status ? (<p className="rounded bg-green-200 text-center w-16 p-1">dispo</p>) : <p className="rounded bg-red-300 text-center w-16 p-1">reserved</p>}</td>
              <td className="p-3 text-sm flex">
                <PencilIcon className="text-indigo-800"  onClick={()=>{setIsOpenEdit(true); set_modal_data(item)}}/>
                <TrashIcon className="text-red-800" onClick={() => DeleteQuay(item._id)} />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
            <Modal isOpen={modalIsOpenEdit}  onRequestClose={()=>{setIsOpenEdit(false)}} style={customStyles} >
            <div className="flex flex-col">
                <div className="flex justify-between px-4">
                  <h2 className="font-bold text-gray-600">Update Quay : {modal_data?.reference}</h2>
                  <button onClick={()=>{setIsOpenEdit(false)}} className = "self-end p-1"><XIcon className="w-5 h-5"/></button>
                </div>
                <form onSubmit = {(e)=>{ e.preventDefault(); editQuay(modal_data._id)}}>
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                        <label htmlFor="reference" className="inline-block sm:text-base mb-4 text-gray-600">Reference :</label>
                        <input type="text" ref={referenceEdit} defaultValue={modal_data?.reference} name="reference" required className="w-full bg-gray-50 text-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
                        </div>
                        <button type="submit" className="block bg-indigo-600 hover:border active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 py-2"> Update </button>
                    </div>
                </form>
            </div>
          </Modal>
    </div>
  )
}
