import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchArea() {
  return (
    <div className="search-wrap">
      <div className="search-area">
        <div className="form-box">
          <TextField
            className="input-box"
            variant="outlined"
            label="사용자 이름"
          />
          <TextField
            className="input-box"
            variant="outlined"
            label="사용자 ID"
          />
          <TextField
            className="input-box"
            variant="outlined"
            label="사용자 ID"
          />
          <TextField
            className="input-box"
            variant="outlined"
            label="사용자 ID"
          />
        </div>
      </div>

      <div className="flex-side-area">
        <div className="right-area">
          <Button variant="contained" className="btn bgc-primary">
            <i className="icon i-18-search-white"></i>
            <span className="txt">조회</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
