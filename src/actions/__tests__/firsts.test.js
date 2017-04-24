// import {
//   getFirsts,
//   getFirstsSuccess,
//   getFirstsError,
//   loadMore,
//   loadMoreError,
//   loadMoreSuccess,
//   addFirsts,
//   addFirstsError,
//   addFirstsSuccess,
// } from '../firsts';
// import mockStore from '../../utils/mockstore';
// import { Firsts } from '../../utils/api';

// jest.mock('../../utils/api').Firsts;

describe('firsts actions', () => {
//   describe('#getFirstsSuccess()', () => {
//     it('Should return first and type of GET_FIRSTS_SUCCESS', () => {
//       const expected = {
//         type: 'GET_FIRSTS_SUCCESS',
//         first: {
//           name: 'test',
//         },
//       };
//       const first = {
//         name: 'test',
//       };
//       expect(getFirstsSuccess(first)).toEqual(expected);
//     });
//   });
//   describe('#getFirstsError()', () => {
//     it('Should return error and type of GET_FIRSTS_ERROR', () => {
//       const expected = {
//         type: 'GET_FIRSTS_ERROR',
//         error: {
//           message: 'error',
//         },
//       };
//       const error = {
//         error: 'error',
//       };
//       expect(getFirstsError(error)).toEqual(expected);
//     });
//   });
//   describe('#getFirsts()', () => {
//     const store = mockStore({});
//     it('Should return payload and type of GET_FIRSTS and GET_FIRSTS_SUCCESS', () => {
//       const payload = {
//         date: '12-31-2010',
//         content: 'Lorem stuff',
//         imageId: 'image.jpeg',
//         userId: '123abc',
//       };
//       Firsts.getFirsts.mockImplementation(() => payload);
//       const expectedActions = [
//         { type: 'GET_FIRSTS' },
//         { type: 'GET_FIRSTS_SUCCESS', payload },
//       ];
//       return store.dispatch(getFirsts())
//         .then(() => {
//           expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
//   });
});
