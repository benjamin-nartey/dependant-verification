import UserProfileImage from "@/assets/user-profile.png";
export default function Card({ staffDetails }) {
  return (
    <div className="flex justify-between items-start gap-4 p-2">
      <div className="bg-gray-300 w-[150px] h-[150px] flex items-center justify-center ">
        <img
          className={`${
            staffDetails?.image ? "h-full w-full" : "h-[75px] w-[75px]"
          } img object-cover object-top bg-no-repeat`}
          src={`${staffDetails?.image ? staffDetails.image : UserProfileImage}`}
          alt="profile"
        />
      </div>
      <div className="details flex items-center justify-start flex-col gap-1">
        <div className=" flex items-center justify-start gap-4 text-left w-full">
          <span className="font-bold">Name</span>
          <span className="capitalize">{`${staffDetails?.employeefirstname.toLowerCase()} ${staffDetails?.employeelastname.toLowerCase()}`}</span>
        </div>
        <div className="flex justify-start items-center gap-4  w-full">
          <span className="font-bold">Sex</span>
          <span className="capitalize">
            {staffDetails?.employeegender.toLowerCase()}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 w-full">
          <span className="font-bold">Department</span>
          <span className="capitalize">
            {staffDetails?.employeedepartment.toLowerCase()}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 w-full">
          <span className="font-bold">Position</span>
          <span className="capitalize">
            {staffDetails?.employeeposition.toLowerCase()}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 w-full">
          <span className="font-bold">Date of employment</span>
          <span className="capitalize">
            {new Date(`${staffDetails?.employeehiredate}`).toLocaleString(
              "en-US"
            )}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 w-full">
          <span className="font-bold">Employment Type</span>
          <span className="capitalize">
            {staffDetails?.employeetype.toLowerCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
