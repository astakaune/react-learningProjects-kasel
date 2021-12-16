import React from 'react';


function Comment(props) {

    const formatDate = (date) => {
        return date.toLocaleDateString();
      };

    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.authorProps.avatarUrl}
            alt={props.authorProps.name}
          />
          <div className="UserInfo-name">
            {props.authorProps.name}
          </div>
        </div>
        <div className="Comment-text">{props.textProps}</div>
        <div className="Comment-date">
          {formatDate(props.dateProps)}
        </div>
      </div>
    );
  }

export default Comment;