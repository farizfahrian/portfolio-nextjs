const Chip = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`inline-flex rounded-[25px] border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 ${className}`}
    >
      {text}
    </div>
  );
};

export default Chip;
