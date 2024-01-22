

const Modal = ({ isOpen, children, onClose }) => {
 if (!isOpen) {
   return null;
 }

 return (
   <div className="modal w-full h-full">
     <div className="modal-content w-[85%] md:w-1/2 py-5 rounded space-y-3 space-x-3 mx-auto">
       {children}
       <button onClick={onClose} className="w-2/5 border border-[#F48352] text-[#F48352] rounded py-1 px-2">Close</button>
     </div>
   </div>
 );
};

export default Modal;
