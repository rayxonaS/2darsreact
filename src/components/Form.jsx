function Form({ setText, handleSubmit, text, error }) {
  return (
    <form className="max-w-96 flex flex-col gap-3 " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here"
        className="input"
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
