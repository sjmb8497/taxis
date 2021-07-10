import { render, screen } from '@testing-library/react';
import App from './App';

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};
  
global.navigator.geolocation = mockGeolocation;

test('renders App', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();

});

test('renders elements within app', () => {
  render(<App />);
  expect(screen.getByText('Change number of taxis:')).toBeInTheDocument();
  expect(screen.getByText('Change location')).toBeInTheDocument();
})
