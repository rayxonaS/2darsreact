const Modal = ({ t, setShowModal, deleteTitle }) => {
  return (
    <div className="modal">
      <p>Are you sure you want to delete {t.title}?</p>
      <button onClick={() => deleteTitle(t.id)}>YES</button>
      <button onClick={() => setShowModal(false)}>NO</button>
    </div>
  );
};

export default Modal;
