import firstsReducer from '../firsts';
import { getFirsts, getFirstsSuccess } from '../../actions/firsts';

const initialState = {
  firsts: [],
};

describe('firsts actions', () => {
  describe('#getFirsts()', () => {
    it('should get a lists of firsts', () => {
      const firsts = [{
        date: '01-01-1999',
        content: 'Lorem whatever',
        image: 'baby.jpg',
        userId: '123abc',
      }];
      expect(
        firstsReducer(
          undefined,
          getFirstsSuccess(
            firsts,
          )
        )
      ).toMatchSnapshot();
    });
  });
});

// import cartReducer from '../cartReducer';
// import { addToCart } from '../../actions/CartActions';

// describe('cartReducer', () => {
//   describe('addToCart', () => {
//     it('adds a single product to cart', () => {
//       expect(
//         cartReducer(
//           undefined,
//           addToCart({
//             productId: '1',
//             grind: 'WHOLE_GRAIN',
//             bagId: '2',
//             quantity: 3,
//           }),
//         ),
//       ).toMatchSnapshot();
//     });

//     it('adds different products to cart', () => {
//       let state = cartReducer(
//         undefined,
//         addToCart({
//           productId: '1',
//           grind: 'WHOLE_GRAIN',
//           bagId: '2',
//           quantity: 3,
//         }),
//       );
//       expect(state).toMatchSnapshot();
//       state = cartReducer(
//         state,
//         addToCart({
//           productId: '2',
//           grind: 'WHOLE_GRAIN',
//           bagId: '2',
//           quantity: 1,
//         }),
//       );
//       expect(state).toMatchSnapshot();
//     });

//     it('should increase quantity when adding same product', () => {
//       let state = cartReducer(
//         undefined,
//         addToCart({
//           productId: '1',
//           grind: 'WHOLE_GRAIN',
//           bagId: '2',
//           quantity: 3,
//         }),
//       );
//       expect(state).toMatchSnapshot();
//       state = cartReducer(
//         state,
//         addToCart({
//           productId: '1',
//           grind: 'WHOLE_GRAIN',
//           bagId: '2',
//           quantity: 1,
//         }),
//       );
//       expect(state).toMatchSnapshot();
//     });
//   });
// });
