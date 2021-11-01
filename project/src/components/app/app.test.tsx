import {render, screen} from '@testing-library/react';
import App from './app';

const TEMPORARY_DATA = {
  count: 5,
};

test('Renders app-component', () => {
  render(<App count={TEMPORARY_DATA.count}/>);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
