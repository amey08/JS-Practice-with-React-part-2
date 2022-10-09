import TileContainer from "./TileContainer";

const Tile = ({ dataSet }) => {
  console.log(dataSet);

  return (
    <div>
      {dataSet.length > 0 ? (
        dataSet.map(({ id, title, description }) => (
          <TileContainer
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))
      ) : (
        <div>no data found</div>
      )}
    </div>
  );
};

export default Tile;
