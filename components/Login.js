import Image from "next/image";
import { useMoralis } from "react-moralis";
import ReactLoading from "react-loading";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();

  if (isAuthenticating)
    return (
      <div className="w-full h-screen bg-black text-white">
        <div className="bg-transparent flex flex-col space-y-5 absolute items-center justify-center w-full h-3/4">
          <ReactLoading
            type="spinningBubbles"
            color="red"
            height={80}
            width={80}
          />
          <h1 className="font-bold">Just a Moment.</h1>
        </div>
      </div>
    );

  return (
    <div className="bg-black relative text-black">
      <div className="flex absolute z-50 items-center justify-center h-3/4 w-full ">
        <button
          onClick={authenticate}
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
