type Corner = {
  id: string;
  w: number;
  h: number;
};

const corners: Corner[] = [
  { id: "mountains", w: 1000, h: 340 },
  { id: "topright", w: 270, h: 260 },
  { id: "botleft", w: 360, h: 260 },
  { id: "botright", w: 310, h: 200 },
];

export const CanvasArt = () => {
  return (
    <div className="canvas-art" aria-hidden="true" role="presentation">
      {corners.map((c) => (
        <video
          key={c.id}
          className={`corner-video corner-${c.id}`}
          src={`/art/corner-${c.id}.mp4?v=5`}
          width={c.w}
          height={c.h}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      ))}
      {corners.map((c) => (
        <div
          key={`${c.id}-still`}
          className={`corner-still corner-${c.id}`}
        />
      ))}
    </div>
  );
};
