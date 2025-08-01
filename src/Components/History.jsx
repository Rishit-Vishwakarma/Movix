import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Watch History</h1>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <ul>
          {history.map((Title, index) => (
            <li key={index}>{Title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
