import React from "react";

const ServiceItems = (props) => {
  const { name, about, image } = props.items;
  console.log(props.items);
  return (
    <div className="col-lg-4 overflow-hidden mt-5 pt-4">
      <div
        style={{
          background: `url(${image})no-repeat`,
          height: "80vh",
          backgroundPosition: "center",
          overflow: "hidden",
          borderRadius: "6px",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center my-service-bg">
          <span>{name}</span> <br />
          <h2>{name}</h2>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
