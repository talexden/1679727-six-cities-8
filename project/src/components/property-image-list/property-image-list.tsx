import { nanoid } from 'nanoid';
import {MAX_PROPERTY_IMAGE} from '../../const';

type PropertyImageListProps = {
  images: string[],
  type: string,
}

function PropertyImageList ({images, type}: PropertyImageListProps):JSX.Element {
  return (
    <div className="property__gallery">
      {images.slice(0, MAX_PROPERTY_IMAGE).map((image) => (
        <div className="property__image-wrapper" key={nanoid()}>
          <img className="property__image" src={image} alt={type} />
        </div>
      ))}
    </div>
  );
}

export default PropertyImageList;
