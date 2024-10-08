/* eslint-disable react/prop-types */
import Card from "./Card";

export const Category = ({ plantCategory }) => {
  const { category, plants } = plantCategory;
  return (
    <div style={{ margin: "10px 50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div
          style={{
            display: "block",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        > */}
          <h1
            style={{
            display: "block",
            padding: "5px 30px",
            borderTop: "2px solid #00000045",
            borderBottom: "2px solid #00000045",
              textAlign: "center",
            }}
          >
            {category}
          </h1>
        {/* </div> */}
      </div>
      <div style={container}>
        {plants.map((p, k) => (
          <Card key={k} plant={p} />
        ))}
      </div>
    </div>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "10px",
};
