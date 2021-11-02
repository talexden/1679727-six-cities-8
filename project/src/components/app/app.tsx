import MainScreen from '../main-screen/main-screen';

type AppProps = {
  count: number,
};

function App(data: AppProps): JSX.Element {
  return (
    <MainScreen count={data.count}/>
  );
}

export default App;
