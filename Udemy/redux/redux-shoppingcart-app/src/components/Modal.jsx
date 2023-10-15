import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/Modalslice";
import { clearCart } from "../features/cart/CartSlice";

const Modal = () => {
  const disptch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごをすべて空にしますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              disptch(clearCart());
              disptch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => disptch(closeModal())}
          >
            やめとく
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
