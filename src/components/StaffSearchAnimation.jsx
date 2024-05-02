import Lottie from "lottie-react";
import animationStaffSearch from "@/constants/staffSearchAnimation.json";

export default function StaffSearchAnimation() {
  return <Lottie animationData={animationStaffSearch} loop={true} />;
}
