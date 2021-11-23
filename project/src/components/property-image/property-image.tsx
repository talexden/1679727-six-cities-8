type PropertyImageProps = {
  image: string,
  type: string,
}

function PropertyImage ({image, type}: PropertyImageProps): JSX.Element {
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={type} />
    </div>
  );
}

export default PropertyImage;
