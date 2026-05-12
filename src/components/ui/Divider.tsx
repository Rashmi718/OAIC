export default function Divider({ className }: { className?: string }) {
  return (
    <hr
      className={`border-none h-px bg-gradient-to-r from-transparent via-earth-600 to-transparent my-0 ${className ?? ''}`}
    />
  );
}
