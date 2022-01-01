import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter you new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-10">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
