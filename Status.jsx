import Status from "../Components/Status";
const infos = [
  { name: "Bouthaina", time: "now" },
  { name: "HOODIE", time: "Yesterday, 17:56" },
];
function StatusCard() {
  return (
    <>
      {infos.map((item, key) => (
        <Status
          name={item.name}
          time={item.time}
          key={key}
        />
      ))}
    </>
  );
}
export default StatusCard;
