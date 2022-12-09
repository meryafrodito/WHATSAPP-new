import Call from "../Components/Call";
const infos = [
  { name: "Bouthaina", time: "now" },
  { name: "HOODIE", time: "Yesterday, 17:56" },
];
function CallBar() {
  return (
    <>
      {infos.map((item, index) => (
        <Call
          name={item.name}
          time={item.time}
          image={item.image}
          key={index}
        />
      ))}
    </>
  );
}
export default CallBar;
