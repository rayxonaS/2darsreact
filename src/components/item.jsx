import Modal from "./modal";
import { FaTrash } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

function Item({ t, deleteTitle }) {
  return (
    <>
      <Modal deleteTitle={deleteTitle} t={t} />
      <li className="flex justify-between mt-5 rounded-lg bg-blue-100 w-xl">
        <p className="p-2">{t.title}</p>
        <div className="ml-auto ">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn btn-error"
          >
            <FaTrash />
          </button>
          <button className="btn btn-success">
            <MdOutlineEdit />
          </button>
        </div>
      </li>
    </>
  );
}

export default Item;
