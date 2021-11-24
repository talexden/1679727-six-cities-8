type PropertyImageListProps = {
  images: string[],
  type: string,
}

function PropertyImageList ({images, type}: PropertyImageListProps):JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <div className="property__image-wrapper" key={`image-${image}`}>
          <img className="property__image" src={image} alt={type} />
        </div>
      ))}
    </div>
  );
}

export default PropertyImageList;
