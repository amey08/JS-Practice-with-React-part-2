const TileContainer = ({ id, title, description }) => {
  return (
    <div className="tile">
      <h2>Title: {title}</h2>
      <div>ID: {id}</div>
      <p>Description: {description}</p>
    </div>
  );
};

export default TileContainer;
