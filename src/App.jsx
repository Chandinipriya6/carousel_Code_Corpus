import { useEffect, useState } from "react";

function App() {
  const cards = [
    { title: "Card 1", color: "yellow" },
    { title: "Card 2", color: "red" },
    { title: "Card 3", color: "green" },
    { title: "Card 4", color: "blue" },
    { title: "Card 5", color: "orange" },
    { title: "Card 6", color: "pink" }
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const cardWidth = 300;
  const visibleCards = 3;
  useEffect(() => {
    let timer;

    if (playing) {
      timer = setInterval(() => {
        setIndex((prev) => {
          const maxIndex = cards.length - visibleCards;
          if (prev >= maxIndex) {
            setPlaying(false);
            return prev;
          }

           return prev+1; 
          
        });
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [playing, cards.length]);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>

      <div
        style={{width: "900px",overflow: "hidden",margin: "30px auto",border: "1px solid black"}}
      >
        <div
          style={{display: "flex",transform: `translateX(-${index * cardWidth}px)`,transition: "0.5s ease"}}
        >
          {cards.map((item, i) => (
            <div
              key={i}
              style={{width: "300px",height: "200px",background: item.color,display: "flex",alignItems: "center",justifyContent: "center",}}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;