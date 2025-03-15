import Modal from "./modal";
import { FaTrash } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

function Item({ t, deleteTitle }) {
  return (
    <>
      <Modal deleteTitle={deleteTitle} t={t} />
      <li>
        <p>{t.title}</p>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-error"
        >
          <FaTrash />
        </button>
        <button className="btn btn-success">
          <MdOutlineEdit />
        </button>
      </li>
    </>
  );
}

export default Item;
