import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import Message from "./Message";

// only show messages from the last 15 mins
const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    //     .greaterThan(
    //       "createdAt",
    //       new Date(Date.now() - 1000 * 60 * MINS_DURATION).toUTCString()
    //     ),
    // [MINS_DURATION],
    [],
    {
      live: true, //this makes it a realtime listener
    }
  );

  // console.log(new Date(Date.now() - 1000 * 60 * MINS_DURATION));
  console.log(data);
  console.log(new Date(Date.now() - 1000 * 60 * MINS_DURATION).toUTCString());

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        />
      </div>

      <div>
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

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
