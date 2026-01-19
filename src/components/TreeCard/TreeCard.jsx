const TreeCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {heading, ...rest} = props;

  return (
      <div className="imageContainer">
        <img {...rest} alt={rest.id} />
        <h1>{heading}</h1>
      </div>
  );
};

export default TreeCard;
