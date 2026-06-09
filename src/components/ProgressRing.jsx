export default function ProgressRing({ progress }) {
  return (
    <div
      className="progress-circle"
      style={{
        background: `conic-gradient(
          #0071e3 0% ${progress}%,
          #e5e5ea ${progress}% 100%
        )`,
      }}
    >
      {progress}%
    </div>
  );
}
