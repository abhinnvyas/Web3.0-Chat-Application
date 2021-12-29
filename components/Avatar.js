import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logOutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75
      transition transform duration-200 ease-in-out"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      layout="fill"
      onClick={() => logOutOnPress && logout()}
    />
  );
}

export default Avatar;
