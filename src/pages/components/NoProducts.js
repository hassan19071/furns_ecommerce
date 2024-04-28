import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NoProducts({ msg }) {
  return (
    <div
      className="no-products text-center"
      style={{
        marginTop: "80px",
      }}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-bag-shopping"
        style={{
          color: "rgb(255, 112, 4)",
          fontSize: "50px",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        {msg}
      </p>
    </div>
  );
}
