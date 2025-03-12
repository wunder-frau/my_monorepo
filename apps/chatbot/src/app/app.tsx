// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import './index.css';
//import NxWelcome from './nx-welcome.js';
import ChatBot from './components/ChatBot/indexChat.js';
// import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    // <div className="bg-fuchsia-300 min-h-screen p-5">
    //   {/* <NxWelcome title=">>chatbot<<" /> */}
    <ChatBot isFooter={true} />

    // </div>
  );
}

export default App;
