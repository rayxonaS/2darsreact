function App() {
  let a = 0;

  const increment = () => {
    a++;
    console.log(a);
  };
  return (
    <div>
      <form className="form">
        <input className="input" type="text" />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
export default App;
