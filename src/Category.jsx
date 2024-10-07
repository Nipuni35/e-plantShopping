/* eslint-disable react/prop-types */
import Card from "./Card";

export const Category = ({ plantCategory }) => {
  const { category, plants } = plantCategory;
  return (
    <div style={{margin: "10px 50px"}}>
      <h1 style={{textAlign: "center"}}>{category}</h1>
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
