export default function Button({ variant = "solid", className = "", ...props }) {
  const styles =
    variant === "solid"
      ? "bg-gold text-white"
      : "border border-gold text-gold bg-transparent";

  return (
    <a
      {...props}
      className={`inline-block min-h-11 rounded-full px-8 py-3 shadow transition hover:opacity-90
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold
                  ${styles} ${className}`}
    />
  );
}