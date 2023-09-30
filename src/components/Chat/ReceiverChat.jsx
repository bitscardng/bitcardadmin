import ProfileIcon from "../ProfileIcon";

const ReceiverChat = ({ time, text }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <ProfileIcon />
      </div>
      <div className="chat-bubble bg-[#6B7CFE] text-white">{text}</div>
      <div className="chat-footer opacity-50">{time}</div>
    </div>
  );
};

export default ReceiverChat;
