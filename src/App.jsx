import { useEffect, useState } from "react";
import TitleList from "./components/TitleList";
import Form from "./components/Form";

const initialValue = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState(initialValue);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

    if (text) {
      setError(false);
    }
  }, [error, text]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  }, [titles]);

  const deleteTitle = (id) => {
    setTitles(titles.filter((t) => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setError("Write something else");
    } else if (text.length < 4) {
      setError("Write more than 4 characters");
    } else {
      setTitles([
        ...titles,
        {
          title: text,
          id: Math.random(),
        },
      ]);
      setText("");
      setError(false);
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <div>
        <h1 className="mb-5">Todos:</h1>
        <Form
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          error={error}
        />
        <ul>
          {!titles.length && <h2>You don't have any information</h2>}
          {titles.length > 0 && (
            <TitleList titles={titles} deleteTitle={deleteTitle} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
