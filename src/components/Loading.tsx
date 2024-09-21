import Skeleton from "./Skeleton";

export default function Loading() {
  return (
    <div className="gap-4 mt-8 grid grid-cols-1 md:grid-cols-3">
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
    </div>
  );
}
