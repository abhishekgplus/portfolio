export default function NoiseLayer() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        opacity-[0.02]
        dark:opacity-[0.04]
        mix-blend-overlay
      "
      style={{
        backgroundImage: "url('/noise.png')",
      }}
    />
  );
}