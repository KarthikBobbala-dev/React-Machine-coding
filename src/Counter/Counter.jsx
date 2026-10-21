import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    setCount((c) => c + Number(e.target.value))
  }
  const handleReset = (e) => {
    setCount(0)
  }
  return (
    <section className="counter-card" aria-label="Counter">
      <style>{`
        .counter-card {
          box-sizing: border-box;
          width: min(100% - 32px, 360px);
          margin: 48px auto;
          padding: 32px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          color: #1e293b;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-align: center;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
        }

        .counter-card h2 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          font-weight: 650;
        }

        .counter-card p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        .counter-card .count {
          display: block;
          margin: 24px 0;
          color: #0f172a;
          font-size: 3.5rem;
          font-variant-numeric: tabular-nums;
          font-weight: 700;
          line-height: 1;
        }

        .counter-card .counter-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .counter-card button {
          width: 52px;
          height: 48px;
          border: 0;
          border-radius: 10px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          font: inherit;
          font-size: 1.5rem;
          transition: background 150ms ease, transform 150ms ease;
        }

        .counter-card button:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .counter-card button:focus-visible {
          outline: 3px solid #93c5fd;
          outline-offset: 3px;
        }
      `}</style>
      <h2>Counter</h2>
      <p>Use the buttons to change the value.</p>
      <output className="count" aria-live="polite">{count}</output>
      <div className="counter-controls">
        <button type="button" aria-label="Decrease count" onClick={() => setCount(count - 1)}>
          −
        </button>
        <button type="button" aria-label="Increase count" onClick={() => setCount(count + 1)}>
          +
        </button>
        <input type="text"  onChange={handleChange}/>
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  )
}