import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CardArea(props) {
  const _data = Object.entries(props.data); // _data = [[key,value],[key,value],[key,value]]

  return (
    <div className="card-wrap">
      <ul className="card-area">
        {/* <li>
          <strong>제목</strong>
          <p>내용</p>
        </li> */}
        {_data.map(([key, value]) => {
          return (
            <li key={key}>
              <strong>{key || "제목"}</strong>
              <p>{value || "-"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
