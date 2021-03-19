const TheirMessage = ({ lastMessage, message }) => {
  // To check if this is first message by user.
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.userName !== message.sender.userName;

    console.log(message.sender.userName);

  return (
    <div className="message-row">
      {/* If the first message is by the user and then return avatar as message image. */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {/* Check if the message is an image? */}
      {message?.attachments?.length > 0 ? (
        //   Return an image
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        // Return message text
        <div
          className="message"
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px'
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
