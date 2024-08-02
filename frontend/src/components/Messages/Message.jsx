/* eslint-disable react/prop-types */
import { useAuthContext } from "../../contexts/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div>
      <div className={`chat ${chatClassName} p-2`}>
        <div className={`chat-bubble ${bubbleBgColor} text-white`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50">
          {extractTime(message.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Message;
