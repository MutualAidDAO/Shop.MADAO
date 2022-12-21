import * as React from 'react';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="relative m-5 rounded-lg shadow-lg bg-blue-200">
        <button className="absolute top-0 right-0 m-2 text-3xl font-bold text-white" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
