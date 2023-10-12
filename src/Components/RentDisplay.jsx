import "../css/rentDisplayStyle.css";

const RentDisplay = function (props) {
  return (
    <div>
      <img class="home_prev" src={require("../img/" + props.src)} />
      <p>Name: {props.name}</p>
      <p className={props.price < 1000000 ? "green" : "red"}>
        Price: {props.price}
      </p>
      <p>Address: {props.address}</p>
    </div>
  );
};

export default RentDisplay;
