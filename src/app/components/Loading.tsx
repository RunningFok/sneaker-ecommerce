export default function Loading() {
  return (
    <div
      className="animate-spin duration-500 inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
