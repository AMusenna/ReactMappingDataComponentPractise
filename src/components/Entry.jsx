import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emj}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.mean}</dd>
    </div>
  );
}

export default Entry;
