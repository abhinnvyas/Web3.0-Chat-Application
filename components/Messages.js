import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        />
      </div>

      <div>{/* Each Message */}</div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🚀</p>
      </div>
    </div>
  );
}

export default Messages;
