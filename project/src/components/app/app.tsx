import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  rating: number;
}

function App(hotel: AppScreenProps): JSX.Element {
  return (
    <MainScreen rating = {hotel.rating}/>
  );
}

export default App;
