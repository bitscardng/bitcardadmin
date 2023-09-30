const SenderChat = ({ text, time }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="bg-[#ED1E79] p-[5px] rounded-full text-[#FDFDFD] text-[30px] font-[500]">
          <p>VA</p>
        </div>
      </div>
      <div className="chat-bubble bg-[#6B7CFE] text-white">{text}</div>
      <div className="chat-footer opacity-50">{time}</div>
    </div>
  );
};

export default SenderChat;
