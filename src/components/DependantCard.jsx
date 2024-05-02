import UserProfileImage from "@/assets/user-profile.png";

export default function DependantCard({ staffDetails }) {
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
          <span className="font-bold">Dependant Name</span>
          <span className="capitalize">{`${staffDetails?.dependantfirstname.toLowerCase()} ${staffDetails?.dependantlastname.toLowerCase()}`}</span>
        </div>
        <div className="flex justify-start items-center gap-4  w-full">
          <span className="font-bold">Relationship</span>
          <span className="capitalize">
            {staffDetails?.Relation.toLowerCase()}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 w-full">
          <span className="font-bold">Age</span>
          <span className="capitalize">
            {`${
              new Date().getFullYear() -
              new Date(`${staffDetails?.dependantdateofbirth}`).getFullYear() -
              (new Date().getTime() <
              new Date("2008-03-31T16:53:22").setFullYear(
                new Date().getFullYear()
              )
                ? 1
                : 0)
            }`}
          </span>
        </div>
      </div>
    </div>
  );
}
