export function Waveform() {
    return (
      <svg
        viewBox="0 0 100 20"
        className="w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
          stroke="red"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }
  