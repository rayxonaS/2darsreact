const Modal = ({ t, deleteTitle }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete</h3>
        <p className="py-4">Are you sure you want to delete {t.title}?</p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-5 items-center">
              <button
                className="btn btn-success"
                type="button"
                onClick={() => deleteTitle(t.id)}
              >
                YES
              </button>
              <button className="btn btn-error">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
