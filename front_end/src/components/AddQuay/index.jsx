import React,{useState, useRef} from 'react'
import Modal from 'react-modal';
import { XIcon } from '@heroicons/react/solid';
import axios from 'axios';
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

export function AddQuay() {
    let subtitle;
    const reference = useRef("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const newQuay = async (e) => {
        e.preventDefault();
        let refObj = {reference: reference.current.value,status: false}
        axios
        .post("http://localhost:3000/addQuay", refObj,{headers: {'auth-token':localStorage.getItem('token')}})
        .then((res) => {console.log(res)
         closeModal()
        }
        )
        .catch((err) => console.log(err.response));
    }

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="w-96 m-8 shadow-sm py-4 flex flex-col">
        
        <button onClick={openModal} className="p-2 self-end">+ New Quay</button>
        <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <div className="flex flex-col">
                <div className="flex justify-between px-4">
                <h2 className="font-bold text-gray-600">New Quay</h2>
                <button onClick={closeModal} className = "self-end p-1"><XIcon className="w-5 h-5"/></button>
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
    );
}
