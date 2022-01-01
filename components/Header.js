import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div
      className="sticky top-0 p-5 z-50 bg-black shadow-s, border-b-2 
    border-pink-700 text-pink-500 lg:mx-20"
    >
      <div className="">
        <div className="text-left lg:text-center">
          <div
            className="relative h-48 w-48 lg:mx-auto border-pink-500 rounded-full 
          border-4 "
          >
            <Avatar logOutOnPress />
          </div>

          <h1 className="text-2xl">Welcome to the Web3 way of Chatting.</h1>
          <h1 className="text-3xl font-bold truncate">{user.getUsername()}</h1>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
