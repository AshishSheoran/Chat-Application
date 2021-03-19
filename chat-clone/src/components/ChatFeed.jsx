// Used for the Chat Feed

import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    // If chats exist, then assign them to chat.
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        // Take keys(id's) from messages and then assign them to keys.
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessageKey={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: MyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            );
        })
    }

    if(!chat) return 'Loading...';
    
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                {/* "chat?" will make sure we have a chat before assigning title */}
                <div className="chat-title">{chat?.title}</div>      
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.userName}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;