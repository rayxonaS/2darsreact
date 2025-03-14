import Item from "./item";
import Modal from "./modal";

function TitleList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((t) => {
        return <Item key={t.id} t={t} deleteTitle={deleteTitle} />;
      })}
    </>
  );
}

export default TitleList;
