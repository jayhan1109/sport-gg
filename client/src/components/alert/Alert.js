import React from "react";
import { useRecoilState } from "recoil";
import { alertState } from "../../recoil/alert";
import "../../styles/Alert.scss";

const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  if (alert !== "") {
    setTimeout(() => {
      setAlert("");
    }, 2000);
    return (
      <div className={`alert alert-${alert.type}`}>
        <p className="alert-msg">{alert.msg}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Alert;
