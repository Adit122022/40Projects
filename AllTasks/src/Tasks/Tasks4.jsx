import { useEffect, useState } from "react";

// Wrist Watch — analog face with digital readout
const Tasks4 = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours() % 12;

  const secondsDeg = s * 6; // 360 / 60
  const minutesDeg = m * 6 + s * 0.1; // include seconds smoothness
  const hoursDeg = h * 30 + m * 0.5; // 360/12 = 30 deg per hour

  const pad = (n) => n.toString().padStart(2, "0");

  return (
    <div className="watch-wrap relative">
      <div className="strap top" />

      <div
        className="watch-face"
        role="img"
        aria-label={`Analog watch showing ${pad(now.getHours())}:${pad(m)}:${pad(s)}`}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="tick"
            style={{ transform: `rotate(${i * 30}deg) translateY(-92px)` }}
          />
        ))}

        <div className="hand hour" style={{ transform: `rotate(${hoursDeg}deg)` }} />
        <div className="hand minute" style={{ transform: `rotate(${minutesDeg}deg)` }} />
        <div className="hand second" style={{ transform: `rotate(${secondsDeg}deg)` }} />

        <div className="center-dot" />
      </div>

      <div className="strap bottom" />

      <div className="text-wrap absolute  w-full h-full text-white text-2xl">{now.toLocaleTimeString()}</div>

      <style>{`
        .watch-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin: 24px 0;
        }

        .watch-face {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 20%, #f8f9fb 0%, #e6eef6 30%, #dde9f6 60%, #bcd0e8 100%);
          box-shadow: 0 8px 20px rgba(0,0,0,0.18), inset 0 -6px 20px rgba(0,0,0,0.06);
          border: 6px solid #2b2b2b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tick {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 4px;
          height: 14px;
          background: #222;
          transform-origin: center -88px;
          border-radius: 2px;
          opacity: 0.9;
        }

        .tick:nth-child(3n) {
          height: 20px;
          width: 5px;
        }

        .hand {
          position: absolute;
          left: 50%;
          top: 50%;
          transform-origin: 50% 100%;
          transition: transform 0.1s linear;
          border-radius: 4px;
        }

        .hand.hour {
          width: 6px;
          height: 58px;
          background: #222;
          margin-left: -3px;
          margin-top: -58px;
          z-index: 3;
        }

        .hand.minute {
          width: 4px;
          height: 80px;
          background: #333;
          margin-left: -2px;
          margin-top: -80px;
          z-index: 2;
        }

        .hand.second {
          width: 2px;
          height: 92px;
          background: #c62828;
          margin-left: -1px;
          margin-top: -92px;
          z-index: 1;
        }

        .center-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #111;
          border-radius: 50%;
          z-index: 4;
          box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset;
        }

        .digital {
          font-family: 'Segoe UI', Roboto, system-ui, -apple-system, 'Helvetica Neue', Arial;
          font-size: 18px;
          color: #111;
          background: rgba(255,255,255,0.8);
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .strap {
          width: 110px;
          height: 36px;
          background: linear-gradient(180deg,#3b3b3b,#1d1d1d);
          border-radius: 6px;
        }

        .strap.top { transform: translateY(-28px); }
        .strap.bottom { transform: translateY(28px); }

        /* Responsive tweak */
        @media (max-width: 480px) {
          .watch-face { width: 160px; height: 160px; }
          .tick { transform-origin: center -66px; }
          .hand.hour { height: 44px; }
          .hand.minute { height: 60px; }
          .hand.second { height: 64px; }
        }
      `}</style>
    </div>
  );
};

export default Tasks4;
