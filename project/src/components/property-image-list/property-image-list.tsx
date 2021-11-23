import PropertyImage from '../property-image/property-image';

type PropertyImageListProps = {
  images: string[],
  type: string,
}

function PropertyImageList ({images, type}: PropertyImageListProps):JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <PropertyImage
          image={image}
          type={type}
          key={`image-${image}`}
        />
      ))}
    </div>
  );
}

export default PropertyImageList;
