import { DataTable } from "@/components/DataTable";
import { useLocalStorage } from "@/hooks/useLocalStorageHook";
import { columns } from "@/constants/staffColumns";
import AreaChartComponent from "@/components/AreaChartComponent";
import PieChartComponent from "@/components/PieChartComponent";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [recentSearches] = useLocalStorage("recentSearches", []);
  const [data, setData] = useState([]);

  const fetchDependants = async () => {
    try {
      const req = await fetch("https://employeesapi.cocobod.net/dependants");
      const staffReq = await fetch("https://employeesapi.cocobod.net/employee");

      const staffRes = await staffReq.json();
      const res = await req.json();
      const dependants = {
        name: "dependants",
        total: res?.length,
      };

      const staff = {
        name: "staffs",
        total: staffRes?.length,
      };

      setData([...data, staff, dependants]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDependants();
  }, []);

  return (
    <div>
      <div className="mb-8 bg-white rounded-md flex flex-col lg:flex-row justify-center items-center p-6 gap-8">
        <div className="lg:w-[30rem] w-full lg:h-[20rem] h-[20rem] bg-[#eaf0fd] rounded">
          <AreaChartComponent data={data} />
        </div>
        <div className="lg:w-[30rem] w-full lg:h-[20rem] h-[20rem] bg-[#eaf0fd] rounded">
          <PieChartComponent data={data} />
        </div>
      </div>
      <h1 className="text-[#0E1B39] text-lg font-semibold mb-4">
        Recent searches
      </h1>
      <DataTable data={recentSearches} columns={columns} />
    </div>
  );
}
