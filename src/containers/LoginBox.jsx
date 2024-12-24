import React from "react";
import Button from "@mui/material/Button";

export default function LoginBox() {
  return (
    <div className="login-box">
      <Button variant="contained" className="btn bgc-primary">
        <i className="icon i-18-search-white"></i>
        <span className="txt">조회</span>
      </Button>
    </div>
  );
}
