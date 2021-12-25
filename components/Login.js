import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-black">
      <div className="flex absolute z-50 items-center justify-center h-3/4 w-full">
        <button
          className="bg-yellow-500 hover:bg-yellow-400 p-5 rounded-full font-bold shadow-lg hover:scale-105
        transtion transform duration-200 ease-in-out active:scale-95 hover:shadow-xl active:shadow-2xl"
        >
          Login to the Metaverse!
        </button>
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
