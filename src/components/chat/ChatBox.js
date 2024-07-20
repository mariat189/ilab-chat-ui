import './ChatBox.css';

import React from 'react';

const ChatBox = ({ responses }) => {
  return (
    <div className="chat-box">
      {responses.map((response, index) => (
        <div key={index} className={`message ${response.role}`}>
          <div className="message-content">
            {response.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
