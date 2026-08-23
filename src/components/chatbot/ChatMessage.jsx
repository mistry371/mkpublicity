import { motion } from 'framer-motion';

export default function ChatMessage({ message }) {
  const isBot = message.role === 'bot';

  return (
    <motion.div
      className={`chat-message ${isBot ? 'bot' : 'user'}`}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="chat-bubble">
        {message.text.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < message.text.split('\n').length - 1 && <br />}
          </span>
        ))}
        <div className="chat-time">{message.time}</div>
      </div>
    </motion.div>
  );
}
