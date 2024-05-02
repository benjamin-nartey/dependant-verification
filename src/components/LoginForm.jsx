import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <form action="" className="flex flex-col">
      <Input
        type="email"
        placeholder="Email"
        className="border-l-0 border-r-0 border-t-0 rounded-none border-b border-[#9D9D9D] outline-none mb-4 focus:!ring-transparent bg-transparent ring-offset-transparent"
      />
      <Input
        className="border-l-0 border-r-0 border-t-0 rounded-none border-b border-[#9D9D9D] outline-none mb-4 focus:!ring-transparent bg-transparent ring-offset-transparent"
        type="password"
        placeholder="Password"
      />

      <Button
        onClick={() => navigate("/home")}
        className="mt-8 text-[18px] bg-[#5B86E5] hover:bg-[#3f6bca]"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
