import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state-type';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  redirectAuthStatus: AuthorizationStatus,
  redirect: AppRoute,
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;


function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {redirect, exact, path, render, authorizationStatus, redirectAuthStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === redirectAuthStatus
          ? <Redirect to={redirect} />
          : render()
      )}
    />
  );
}

export {PrivateRoute};

export default connector(PrivateRoute);
