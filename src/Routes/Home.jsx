import Card from "@/components/Card";
import React from "react";
import { useContext } from "react";
import { StaffContext } from "@/context/staffContext";
import DependantCard from "@/components/DependantCard";
import StaffSearchAnimation from "@/components/StaffSearchAnimation";
import { UserDetailsSkeleton } from "@/components/UserDetailsSkeleton";
import NoUserAnimation from "@/components/NoUserAnimation";

export default function Home() {
  const { staffDetails, isLoading } = useContext(StaffContext);

  return (
    <>
      {staffDetails === null ? (
        <div className="w-full flex justify-center items-center">
          <div className="max-md:w-full max-md:p-3 w-4/5 flex flex-col items-center justify-center gap-4 p-6 bg-white shadow-md rounded-md sticky top-[56px] min-h-[80vh]">
            <NoUserAnimation />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          {staffDetails?.length > 0 && !isLoading ? (
            <div className="max-md:w-full max-md:p-3 w-4/5 flex flex-col items-center justify-start gap-4 p-6 bg-white shadow-md rounded-md sticky top-[56px] min-h-[80vh]">
              {staffDetails?.length > 0 && (
                <Card staffDetails={staffDetails?.[0]} />
              )}
              <div className="border-t border-[#858585] w-3/4 max-md:w-full"></div>
              <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-4">
                {staffDetails?.map((staff) => (
                  <DependantCard
                    key={`${staff?.dependantfirstname} ${staff?.dependantlastname}`}
                    staffDetails={staff}
                  />
                ))}
              </div>
            </div>
          ) : staffDetails?.length < 1 && isLoading ? (
            <div className="max-md:w-full max-md:p-3 w-4/5 flex flex-col items-center justify-start gap-4 p-6 bg-white shadow-md rounded-md sticky top-[56px] min-h-[80vh]">
              {[1, 2, 3].map((_, i) => (
                <UserDetailsSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="w-full p-3 lg:w-4/5 flex items-center justify-center gap-4 lg:p-6 bg-white shadow-md rounded-md sticky top-[56px] h-[80vh]">
              <StaffSearchAnimation />
            </div>
          )}
        </div>
      )}
    </>
  );
}
