export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-brand-grey text-white px-4 py-2 rounded"
    >
      {label}
    </button>
  );
}
