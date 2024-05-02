import Lottie from "lottie-react";
import animationNoUser from "@/constants/noUserAnimation.json";

export default function NoUserAnimation() {
  return <Lottie animationData={animationNoUser} loop={true} />;
}
