import PlaceCard from '../place-card/place-card';
import {useState} from 'react';
import {OfferType} from '../../types/offerType';

type OffersListProps = {
  offers: OfferType[],
}


function OffersList({offers}: OffersListProps): JSX.Element {
  const [selectedId, setSelectedId] = useState(0)
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return (
          <PlaceCard
            offer={offer}
            key={offer.id}
            onSelect={() => setSelectedId(offer.id)}
          />
        )}
      )}
    </div>
  );
}

export default OffersList;
