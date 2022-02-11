import Enzyme from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ 
  adapter: new EnzymeAdaptor() 
});

global.___loader = {
  enqueue: jest.fn(),
}