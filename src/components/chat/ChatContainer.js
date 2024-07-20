import './ChatContainer.css';

import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatContainer = ({ responses, message, setMessage, handleSendMessage, handleKeyDown, isSending }) => {
  const sendMessage = () => {
    if (!message.trim() || isSending) return;
    handleSendMessage(message);
  };

  return (
    <div className="chat-container" style={{
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '90px',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      margin: '0',
      boxSizing: 'border-box'
    }}>
      <ChatBox responses={responses} />
      <div className="input-box">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Quote down your question..."
          onKeyDown={handleKeyDown}
          disabled={isSending}
        />
        <button onClick={sendMessage} disabled={isSending}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
