import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { StaffContext } from "@/context/staffContext";
import { useLocalStorage } from "@/hooks/useLocalStorageHook";

export default function SearchInput() {
  const [staffId, setStaffId] = useState("");
  const [recentSearches, setRecentSearches] = useLocalStorage(
    "recentSearches",
    []
  );

  const { getStaffDetails, setLoadingState } = useContext(StaffContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getStaffDetails([]);
    setLoadingState(true);
    try {
      const req = await fetch("https://employeesapi.cocobod.net/dependent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ szEmpID: staffId }),
      });
      const res = await req.json();

      if (res?.length) {
        const newRecentSearch = {
          id: `${res?.[0].employeeid}`,
          staffName: `${res?.[0].employeefirstname} ${res?.[0].employeelastname}`,
          sex: `${res?.[0].employeegender}`,
          position: `${res?.[0].employeeposition}`,
          department: `${res?.[0].employeedepartment}`,
          phone: `${res?.[0].employeephone}`,
          timestamp: `${new Date().toISOString()}`,
        };

        setRecentSearches([newRecentSearch, ...recentSearches]);
      }

      getStaffDetails(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-[0.7]" role="search">
      <div className="rounded-full flex justify-between items-center bg-white/75 shadow-md px-4">
        <Input
          className="border-none rounded-none bg-transparent ring-offset-transparent focus:!ring-transparent"
          placeholder="Search"
          value={staffId}
          required
          onChange={(e) => setStaffId(e.target.value)}
        />
        <Button
          type="submit"
          className="hover:bg-transparent"
          variant="ghost"
          size="icon"
        >
          <Search className="text-black/70" />
          <span className="sr-only">Search Button</span>
        </Button>
      </div>
    </form>
  );
}
