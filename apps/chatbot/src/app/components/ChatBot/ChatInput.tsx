import { ChangeEvent, FormEvent, memo } from 'react';

type Props = {
  userMessage: string;
  setUserMessage: (value: string) => void;
  handleSendMessage: (e: FormEvent) => void;
};

const ChatInput = ({
  userMessage,
  setUserMessage,
  handleSendMessage,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="mt-auto flex flex-col items-center space-y-2 p-2 sm:flex-row sm:space-y-0 sm:space-x-2">
      <form
        onSubmit={handleSendMessage}
        className="flex w-full items-center justify-center space-x-2 sm:justify-start"
      >
        <input
          type="text"
          value={userMessage}
          onChange={handleChange}
          placeholder="Type your message here"
          className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 text-sm text-white focus:border-sky-500 focus:outline-none"
          aria-label="Chat input field"
        />
        <button className="inline-flex items-center justify-center rounded-md bg-sky-900 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default memo(ChatInput);
