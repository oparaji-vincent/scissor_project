import "../components/info.css";
const Info: React.FC<{ title: string; text: string; img: string }> = (
  props
) => {
  return (
    <div className="info">
      <img src={props.img} alt="" />
      <h3 className="font-bold text-2xl mb-2" >{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Info;
