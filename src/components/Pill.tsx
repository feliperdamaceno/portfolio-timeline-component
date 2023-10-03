interface PillProps {
  label: string
}

export default function Pill({ label }: PillProps) {
  return (
    <span className="py-1 text-xs font-semibold transition-colors rounded-full cursor-pointer px-2.5 bg-neutral-400 text-neutral-800 hover:bg-neutral-50">
      {label}
    </span>
  )
}
