import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500">
      <div>
        <div>
          <div
            className="relative h-48 w-48 lg:mx-auto border-pink-500 rounded-full 
          border-4 lg:border-8"
          >
            <Avatar logOutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the Web3 way of Chatting.</h1>
          <h1 className="text-5xl font-bold truncate">{user.getUsername()}</h1>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
