function Form({ setText, handleSubmit, text, error }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Write whatever you want"
        onChange={(e) => {
          const inputText = e.target.value;
          setText(inputText);
        }}
        value={text}
      />

      <button className="button">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
