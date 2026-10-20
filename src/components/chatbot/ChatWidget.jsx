import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import chatEngine from './ChatEngine';
import { useModal } from '../../context/ModalContext';

export default function ChatWidget() {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasGreetedRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !hasGreetedRef.current) {
      hasGreetedRef.current = true;
      const timer = setTimeout(() => {
        const greeting = chatEngine.getGreeting();
        setMessages([{
          role: 'bot',
          text: greeting.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setSuggestions(greeting.suggestions);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(prev => {
      const next = !prev;
      if (next) setHasUnread(false);
      return next;
    });
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      role: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setSuggestions([]);
    setIsTyping(true);

    // Simulate natural typing delay (300-1200ms based on response length)
    const delay = Math.min(300 + text.length * 30, 1500);

    setTimeout(() => {
      const response = chatEngine.processMessage(text);
      const botMsg = {
        role: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setSuggestions(response.suggestions || []);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div
        className="chat-widget-trigger"
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        id="chat-trigger"
      >
        {isOpen ? '✕' : '💬'}
        {hasUnread && !isOpen && <span className="chat-unread">1</span>}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            id="chat-window"
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-header-avatar">MK</div>
                <div className="chat-header-name">
                  <h4>MK Assistant</h4>
                  <p>● Online</p>
                </div>
              </div>
              <div className="chat-close" onClick={() => setIsOpen(false)} id="chat-close">✕</div>
            </div>

            {/* Messages */}
            <div className="chat-messages" id="chat-messages">
              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))}
              {isTyping && (
                <div className="chat-typing">
                  <div className="chat-typing-dot"></div>
                  <div className="chat-typing-dot"></div>
                  <div className="chat-typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Suggestions */}
            {suggestions.length > 0 && !isTyping && (
              <motion.div
                className="chat-suggestions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    className="chat-suggestion"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            )}

            {/* WhatsApp Quick Action */}
            <button
              onClick={openModal}
              className="chat-wp-btn"
              id="chat-whatsapp"
            >
              💬 Continue on WhatsApp
            </button>

            {/* Input Area */}
            <div className="chat-input-area">
              <input
                ref={inputRef}
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                id="chat-input"
              />
              <button
                className="chat-send"
                onClick={() => sendMessage(input)}
                id="chat-send"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
