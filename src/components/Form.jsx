function Form({ setText, handleSubmit, text, error }) {
  return (
    <form
      className=" flex flex-col gap-3 w-xl rounded-lg "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Choose your favorite car"
        className="input w-xl rounded-lg text-xl"
        onChange={(e) => {
          const inputText = e.target.value;
          setText(inputText);
        }}
        value={text}
      />

      <button className="btn text-xl border-b-black  w-full mt-4 bg-orange-200 hover:bg-orange-300 font-semibold py-2 px-4 rounded-xl transition-all text-black">
        Add
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
