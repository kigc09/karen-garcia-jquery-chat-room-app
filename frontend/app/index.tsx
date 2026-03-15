import React from "react";

const HtmlPreview: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/index.html"
        title="Chat Room"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default HtmlPreview;