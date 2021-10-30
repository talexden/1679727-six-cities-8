import MainScreen from '../main-screen/main-screen';

type AppProps = {
  host: {
    rating: number;
    isPremium: boolean,
    price : number,
    title: string,
    type: string,
    previewImage: string,
  },
}

function App(data: AppProps): JSX.Element {
  return (
    <MainScreen host={data.host}/>
  );
}

export default App;
