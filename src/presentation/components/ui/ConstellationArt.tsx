/**
 * Ilustrasi "peta bintang" — elemen visual utama yang menghubungkan
 * nama brand ("My Stars") dengan citra jaringan/sistem (titik-titik
 * yang saling terhubung, seperti arsitektur software).
 */
export function ConstellationArt() {
  const nodes = [
    { x: 60, y: 80, r: 3 },
    { x: 150, y: 40, r: 5 },
    { x: 230, y: 110, r: 2.5 },
    { x: 320, y: 60, r: 4 },
    { x: 400, y: 130, r: 3 },
    { x: 110, y: 190, r: 2.5 },
    { x: 210, y: 220, r: 6 },
    { x: 300, y: 200, r: 3 },
    { x: 380, y: 250, r: 2.5 },
    { x: 60, y: 300, r: 3.5 },
    { x: 160, y: 330, r: 2.5 },
    { x: 260, y: 310, r: 4 },
    { x: 340, y: 360, r: 3 },
    { x: 130, y: 410, r: 2.5 },
    { x: 230, y: 420, r: 3 },
  ];

  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [1, 5], [5, 6], [6, 7], [7, 3], [7, 8],
    [5, 9], [9, 10], [10, 6], [6, 11], [11, 7], [11, 12],
    [9, 13], [13, 14], [14, 11],
  ];

  return (
    <svg
      viewBox="0 0 460 460"
      className="h-full w-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#E7B24B" strokeOpacity="0.25" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      <g fill="#E7B24B">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} fillOpacity={n.r > 4 ? 1 : 0.7} />
        ))}
      </g>
      <g fill="#3F8F82">
        <circle cx="210" cy="220" r="2" fillOpacity="0.9" />
        <circle cx="260" cy="310" r="1.6" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
