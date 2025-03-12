import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [titles, setTitles] = useState([
    {
      title: "Title-1",
      id: 1,
    },
    {
      title: "Title-2",
      id: 2,
    },
    {
      title: "Title-3",
      id: 3,
    },
  ]);

  const deleteTitle = (id) => {
    setTitles(titles.filter((t) => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles([
      ...titles,
      {
        title: text,
        id: Math.random(),
      },
    ]);
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Write what do you want"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button className="button">Add</button>
      </form>
      <ul>
        {titles.map((t) => {
          return (
            <li key={t.id}>
              <p>{t.title}</p>
              <button onClick={() => deleteTitle(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
