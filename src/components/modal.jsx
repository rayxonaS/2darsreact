const Modal = ({ t, deleteTitle }) => {
  return (
    <div>
      <button onClick={() => setShowModal(false)}>NO</button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete</h3>
          <p className="py-4">Are you sure you want to delete {t.title}?</p>
          <div className="modal-action">
            <form method="dialog">
              <button type="button" onClick={() => deleteTitle(t.id)}>
                YES
              </button>
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
