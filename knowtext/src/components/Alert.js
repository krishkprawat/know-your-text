import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && ( //if props.alert is not null (and operator)
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {props.alert.type} : {props.alert.msg}
          </strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
