import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>This is the Login Screen!</h1>

      <div className="flex absolute z-50 items-center justify-center h-3/4 w-full">
        <button classname="bg-yellow-400 p-5">Login to the Metaverse!</button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
