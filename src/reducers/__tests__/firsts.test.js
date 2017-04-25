import firstsReducer from '../firsts';
import { getFirstsSuccess, loadMoreSuccess, addFirstsSuccess, deleteFirstsSuccess } from '../../actions/firsts';

const dummyData = {
  firsts1: [{
    _id: 12345,
    date: '01-01-1999',
    content: 'Lorem whatever',
    image: 'baby.jpg',
    userId: '123abc',
  }],
  firsts2: [{
    date: '12-12-2000',
    content: 'Lorem etc',
    image: 'babys.jpg',
    userId: '123abc',
  }],
  firsts3: [{
    date: '11-10-2001',
    content: 'Lorem other lorem',
    image: 'child.jpg',
    userId: '123abc',
  }],
  loading: false,
  errorMessage: false,
};

describe('firsts actions', () => {
  it('#getFirstsSuccess(): should get a lists of firsts', () => {
    expect(
        firstsReducer(
          undefined,
          getFirstsSuccess(
            dummyData.firsts1,
          )
        )
      ).toMatchSnapshot();
  });
  it('#loadMoreSuccess(): should get another list of firsts', () => {
    const state = firstsReducer(
        undefined,
        getFirstsSuccess(
          dummyData.firsts1,
        )
      );
    expect(state).toMatchSnapshot();
    expect(firstsReducer(
        state,
        loadMoreSuccess(
          dummyData.firsts2,
        )
      )).toMatchSnapshot();
  });

  it('#addFirstsSuccess(): should add a first to list of firsts', () => {
    const state = firstsReducer(
    undefined,
      getFirstsSuccess(
        dummyData.firsts1,
      ),
    );
    expect(state).toMatchSnapshot();
    expect(firstsReducer(
      state,
        addFirstsSuccess(
        dummyData.firsts3,
      )
    )).toMatchSnapshot();
  });

  it('#deleteFirstsSuccess(): should add a first to list of firsts', () => {
    const state = firstsReducer(
      undefined,
      getFirstsSuccess(
        dummyData.firsts1,
      ),
    );
    expect(state).toMatchSnapshot();
    expect(firstsReducer(
    state,
      deleteFirstsSuccess(
        dummyData.firsts1,
      )
    )).toMatchSnapshot();
  });
});
