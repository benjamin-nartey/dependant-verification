import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import AuthBg from "@/assets/authBg.png";

export default function SignInPage() {
  return (
    <main className="h-screen flex justify-center items-center bg-[#eaf0fd]">
      <div
        className="flex-1 h-full max-md:hidden"
        style={{
          backgroundImage: `url(${AuthBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex-1 flex justify-center items-center ">
        <div className="w-96 p-6 max-md:w-full max-md:p-3">
          <Logo />
          <div className="mb-[2rem]">
            <h3 className="font-bold">Sign-in</h3>
            <p>Please sign in to your account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
