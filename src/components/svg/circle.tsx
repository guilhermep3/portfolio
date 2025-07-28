type Props = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  className?: string;
  size?: number;
};
export const Circle = ({ top, left, right, bottom, className, size }: Props) => {

  return (
    <div className={`absolute circle opacity-20 ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      <svg width={size ?? 400} height={size ?? 400} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="60"
          stroke="#7f33e4" strokeWidth="6" fill="none"
          strokeDasharray="188 94" strokeDashoffset="0" />
        <circle cx="150" cy="150" r="90"
          stroke="#7f33e4" strokeWidth="5" fill="none"
          strokeDasharray="100 30 50 20" strokeDashoffset="10" />
        <circle cx="150" cy="150" r="120"
          stroke="#7f33e4" strokeWidth="4" fill="none"
          strokeDasharray="220 140" strokeDashoffset="50" />
        <circle cx="150" cy="150" r="140"
          stroke="#7f33e4" strokeWidth="3" fill="none"
          strokeDasharray="50 40 30 80" strokeDashoffset="30" />
      </svg>
    </div>
  )
}