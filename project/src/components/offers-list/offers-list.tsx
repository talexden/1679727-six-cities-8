import PlaceCard from '../place-card/place-card';
import {useState} from 'react';
import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';

type OffersListProps = {
}

const mapStateToProps = ({cityOffers}: State) => ({
  cityOffers: cityOffers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & OffersListProps;

function OffersList({cityOffers}: ConnectedComponentProps): JSX.Element {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={`${offer.id}-${offer.title}`}
          onSelect={() => setSelectedId(offer.id)}
        />
      ))}
    </div>
  );
}

export {OffersList};

export default connector(OffersList);
