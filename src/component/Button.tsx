export default function Button({ name, img }) {
  return (
    <div className="flex gap-2">
      <img src={img} alt="" />
      <div>{name}</div>
    </div>
  );
}
