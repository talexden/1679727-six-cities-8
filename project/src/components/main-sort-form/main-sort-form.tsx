import {OfferType} from '../../types/offer-type';
import {ThunkAppDispatch} from '../../types/action-type';
import {connect, ConnectedProps} from 'react-redux';
import {sortCityOffers} from '../../store/action';
import {SORT_ITEMS} from '../../const';
import {StateType} from '../../types/state-type';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';

const sortByPriceLoHi = (offers: OfferType[]) => [...offers].sort((a, b) => a.price > b.price ? 1 : -1);
const sortByPriceHiLo = (offers: OfferType[]) => [...offers].sort((a, b) => a.price > b.price ? -1 : 1);
const sortByRatingHiLo = (offers: OfferType[]) => [...offers].sort((a, b) => a.rating > b.rating ? 1 : -1);

const mapStateToProps = ({cityOffers}: StateType) => ({
  cityOffers: cityOffers,
});


const mapDispatchToProps = (dispatch: ThunkAppDispatch) =>({
  sortOffers (sortItem: string, cityOffers: OfferType[]){
    switch (sortItem) {
      case SORT_ITEMS[0]:
        dispatch(sortCityOffers([...cityOffers]));
        break;}
    switch (sortItem) {
      case SORT_ITEMS[1]:
        dispatch(sortCityOffers(sortByPriceLoHi(cityOffers)));
        break;}
    switch (sortItem) {
      case SORT_ITEMS[2]:
        dispatch(sortCityOffers(sortByPriceHiLo(cityOffers)));
        break;}
    switch (sortItem) {
      case SORT_ITEMS[3]:
        dispatch(sortCityOffers(sortByRatingHiLo(cityOffers)));
        break;}
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function MainSortForm ({cityOffers, sortOffers}: PropsFromRedux): JSX.Element {
  const [showFilterState, setShowFilterState] = useState(false);
  const [filterState, setFilterState] = useState('Popular');
  useEffect(()=>{
    sortOffers(filterState, cityOffers);
    setShowFilterState(false);
  }, [filterState, cityOffers]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=>{setShowFilterState(true);}}>
        {filterState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`${showFilterState ? 'places__options--opened ' : ''}places__options places__options--custom`}>
        {
          SORT_ITEMS.map((sortItem) => (
            <li
              onClick={() => {setFilterState(sortItem);}}
              className="places__option"
              tabIndex={0}
              key={nanoid()}
            >{sortItem}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export {MainSortForm};

export default connector(MainSortForm);
