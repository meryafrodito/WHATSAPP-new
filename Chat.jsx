import profile1 from "../Pictures/aphrodit.jpg";
import profile2 from "../Pictures/pic.jpg";
import Chat from "../Components/Chat";
const infos = [
  { name: "Rajae", message: "hey", time: "now", image: { profile1 } },
  { name: "Meryam", message: "hello", time: "9:30", image: { profile2 } },
  { name: "Fahd", message: "how are you", time: "7:20", image: { profile1 } },
  { name: "Bouthaina", message: "hry", time: "6:14", image: { profile2 } },
  { name: "HOODIE", message: "hey", time: "Yesterday", image: { profile1 } },
];

function ChatCard() {
  return (
    <>
      {infos.map((item, key) => (
        <Chat
          name={item.name}
          message={item.message}
          image={item.image}
          time={item.time}
          key={key}
        />
      ))}
    </>
  );
}
export default ChatCard;
