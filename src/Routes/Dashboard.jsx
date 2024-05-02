import { DataTable } from "@/components/DataTable";
import { useLocalStorage } from "@/hooks/useLocalStorageHook";
import { columns } from "@/constants/staffColumns";

export default function Dashboard() {
  const [recentSearches] = useLocalStorage("recentSearches", []);

  return (
    <div>
      <h1 className="text-[#0E1B39] text-lg font-semibold mb-4">
        Recent searches
      </h1>
      <DataTable data={recentSearches} columns={columns} />
    </div>
  );
}
