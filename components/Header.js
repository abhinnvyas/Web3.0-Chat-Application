import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div className="">
        <div>
          <div
            className="relative h-48 w-48 lg:mx-auto border-pink-500 rounded-full 
          border-4 lg:border-8"
          >
            <Avatar logOutOnPress />
          </div>
          {/* Welcome Message */}
          {/* username */}
          {/* change username */}
        </div>
      </div>
    </div>
  );
}

export default Header;
