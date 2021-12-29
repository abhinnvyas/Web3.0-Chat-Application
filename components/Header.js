import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div className="">
        <div>
          <div className="">
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
