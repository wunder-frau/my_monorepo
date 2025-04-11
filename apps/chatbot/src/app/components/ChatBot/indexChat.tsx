import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import { GiBookshelf } from 'react-icons/gi';
import BotMessage from './BotMessage.js';
import ChatInput from './ChatInput.js';
import UserMessage from './UserMessage.js';
import { Message } from '../../../types.js';

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessgaes] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hey there, book buff! Ready to dive into a world of wild page-turners? I've got more novel recommendations than a library on a caffeine high!",
    },
  ]);

  const renderMessage = (msg: Message, idx: number) => {
    switch (msg.role) {
      case 'assistant':
        return <BotMessage {...msg} key={idx} />;
      case 'user':
        return <UserMessage {...msg} key={idx} />;
      default:
        return null;
    }
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    console.log('USER MESAGE', userMessage);
    if (!userMessage) return;

    const mewMessage: Message = {
      role: 'user',
      content: userMessage,
    };
    console.log('NEW MESSAGE', mewMessage);

    setMessgaes((prevMessage) => [...prevMessage, mewMessage]);
    setUserMessage('');
    setLoading(true);

    // try {
    //   const chatMessages = messages.slice(1);
    //   console.log('Chat messages', chatMessages);
    // } catch () {

    // }
  };

  return (
    <div>
      <GiBookshelf
        size={48}
        onClick={() => setShowChat(!showChat)}
        className={clsx(
          'fixed bottom-8 right-4 hover:cursor-pointer hover:text-blue-400 sm:right-12',
          'bottom-[7rem]',
          { 'animate-bounce': !showChat },
        )}
      />
      {showChat && (
        <div
          className={clsx(
            'fixed right-2 h-[60vh] w-[90%] max-w-[320px] rounded-2xl bg-sky-700 p-5 shadow-md shadow-white',
            'bottom-[7rem]',
            'sm:right-12 sm:h-[400px] sm:max-w-md',
          )}
        >
          <div className="flex h-full flex-col">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-white">
                Chatbot
              </h2>
              <p className="text-gray-300">Powered by OpenAI</p>
            </div>
            <div className="mt-5 flex flex-1 flex-col items-center overflow-y-auto p-2 text-gray-300">
              {messages.map(renderMessage)}
            </div>
            <ChatInput
              userMessage={userMessage}
              setUserMessage={setUserMessage}
              handleSendMessage={handleSendMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
