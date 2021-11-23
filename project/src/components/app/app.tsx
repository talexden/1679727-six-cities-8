import {connect, ConnectedProps} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import ErrorScreen from '../error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state-type';
import browserHistory from '../../browser-history';


export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;


const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};

export default connector(App);
