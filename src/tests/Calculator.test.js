import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Calculator component should render correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
