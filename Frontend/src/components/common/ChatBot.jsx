function ChatbotComponent() {
  return (
    <div>
      <iframe
        src="https://answer-engine-two.vercel.app/"
        style={{
          width: "50rem",
          height: "600px",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
}

export default ChatbotComponent;
