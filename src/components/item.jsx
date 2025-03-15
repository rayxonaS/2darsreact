import { useState } from "react";
import Modal from "./modal";
import { FaTrash } from "react-icons/fa";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />
      )}
      <li>
        <p>{t.title}</p>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FaTrash />
        </button>
      </li>
    </>
  );
}

export default Item;
