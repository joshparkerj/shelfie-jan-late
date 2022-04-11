import {render, /*screen, fireEvent*/} from '@testing-library/vue'
import App from './App.vue'

test('renders without crashing', async () => {
  render(App);
});
