import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

export default function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="avatar" />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.online ? "online" : "offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
