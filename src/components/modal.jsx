const Modal = ({ p, onclose }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{p.title}</h3>
        <p className="py-4">
          Do you want to buy {p.description}?{" "}
          <span className="text-xl text-blue-400">We would be glad:)</span>
        </p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-5 items-center">
              <button className="btn btn-success">YES</button>
              <button className="btn btn-error " onClick={onclose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
