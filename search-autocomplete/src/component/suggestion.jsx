import "../App.css";

export default function Suggestion({ data, handleClick }) {
  return (
    <ul className="listbox">
      {data && data.length
        ? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
        : null}
    </ul>
  );
}

