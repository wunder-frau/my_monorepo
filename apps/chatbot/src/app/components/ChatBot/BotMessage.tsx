import { PiBooksFill } from 'react-icons/pi';
import { Message } from '../../../types.js';

const BotMessage = ({ role, content }: Message) => {
  return (
    <div className="my-2 flex w-full">
      <div className="mr-2 flex h-8 w-8 justify-center rounded-full border bg-sky-900 p-1">
        <PiBooksFill size={18} />
      </div>
      <div>
        <div className="font-medium text-white">{role}</div>
        <p className="text-sm text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default BotMessage;
