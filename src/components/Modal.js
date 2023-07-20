import React from 'react';
import {RxCross2} from 'react-icons/rx'

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center`}
    >
      <div className="modal-content relative md:w-2/4 w-3/4 rounded-md bg-white p-6 ">
    
        <p className='font-bold text-xl '>Thank you for registering for our Online Webinar!  
          </p>
           <RxCross2 className='absolute top-1 text-black font-bold cursor-pointer right-2' size={20} onClick={onClose} />

        <p className='font-semibold pt-2'>We extend our heartfelt gratitude for choosing to be a part of this enriching experience. Get ready to be inspired by our expert speakers, engage in thought-provoking discussions, and gain valuable insights. </p>

       
      </div>

    </div>
  );
};

export default Modal;