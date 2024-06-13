import React from 'react';

function App() {
  const iframeStyle = {
    width: '100%', // Set width to 100% of the parent container
    height: '100vh', // Set height to 100% of the viewport height
    border: 'none' // Remove border
  };

  return (
    <div>
      <iframe
        title="Dashboard"
        style={iframeStyle}
        src="https://app.powerbi.com/view?r=eyJrIjoiYjNmZWM1MjItMGMyYS00MGIzLTg5MzktOGJmZDI5MGQxYjk4IiwidCI6IjMyNTA4NzUzLWE1M2MtNGFhNy05MjlmLWRkNWFmMTQ0NDNkOCJ9"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default App;