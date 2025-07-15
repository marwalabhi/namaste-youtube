export default function VideoSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {/* thumbnail */}
      <div className="aspect-video w-full rounded-xl bg-gray-200" />

      <div className="flex gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-5/6 rounded bg-gray-200" />
          <div className="h-4 w-4/6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
