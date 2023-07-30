interface Props {
  percentage: number
  size: number
  text?: string
}

export default function CircularProgress({ percentage, size, text }: Props) {
  const radius = size * 0.38
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100
  const strokeWidth = 6
  //   debugger
  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          strokeWidth={`${strokeWidth}`}
          r={radius}
          className="fill-none stroke-slate-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          strokeWidth={`${strokeWidth}`}
          r={radius}
          className={`fill-none stroke-black`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: 'round'
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {text && (
          <text
            x="50%"
            y="50%"
            dy={'0.3rem'}
            textAnchor="middle"
            className="text-xs font-bold"
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  )
}
