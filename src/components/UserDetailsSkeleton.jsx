import { Skeleton } from "@/components/ui/skeleton";

export function UserDetailsSkeleton() {
  return (
    <div className="flex items-start space-x-4">
      <Skeleton className="lg:h-[150px] lg:w-[150px] h-[70px] w-[70px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 lg:w-[350px] w-[200px]" />
        <Skeleton className="h-4 lg:w-[300px] w-[150px]" />
        <Skeleton className="h-4 lg:w-[250px] w-[100px]" />
        <Skeleton className="h-4 lg:w-[200px] w-[80px]" />
        <Skeleton className="h-4 lg:w-[150px] w-[60px]" />
      </div>
    </div>
  );
}
