const Chip = ({ text, className }: { text: string; className?: string }) => {
    return (
        <div
            className={`inline-flex rounded-[25px] bg-white text-zinc-600 border border-zinc-200 px-4 py-2 text-sm ${className}`}
        >
            {text}
        </div>
    )
}

export default Chip
