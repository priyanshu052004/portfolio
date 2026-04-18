/**
 * ElectricBorder
 * A reusable glass card with an animated neon border.
 * Tip: Wrap any content inside it.
 */
export default function ElectricBorder({ children, className = '' }) {
  return (
    <div className={`electric glass glow-ring p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}

