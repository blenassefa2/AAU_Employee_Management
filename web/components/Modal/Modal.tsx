import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: ReactNode;
};
export const Modal = ({ isOpen, onClose, message }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white justify-center items-center w-[60%] rounded-lg p-6">
        <div className="text-lg font-bold text-black mb-4">{message}</div>
        <button
          className="px-4 py-2 bg-primary text-white rounded-lg mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
