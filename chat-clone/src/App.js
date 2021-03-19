import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="ace849b7-f144-4909-9008-ae03ba0fa906"
      userName="Admin"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App;