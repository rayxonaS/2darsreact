function Form({ setText, handleSubmit, text, error }) {
  return (
    <form
      className=" flex flex-col gap-3 w-xl rounded-lg "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type here"
        className="input w-xl rounded-lg"
        onChange={(e) => {
          const inputText = e.target.value;
          setText(inputText);
        }}
        value={text}
      />

      <button className="btn btn-secondary">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
