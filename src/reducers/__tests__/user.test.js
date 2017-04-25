import userReducer from '../user';
import { loginSuccess, signupSuccess, logout } from '../../actions/user';

const dummyData = {
  user1: [{
    _id: 12345,
    username: 'larry01',
    password: 'password01',
    birthday: '04-05-2016',
  }],
  user2: [{
    _id: 67890,
    username: 'bob02',
    password: 'password02',
    birthday: '05-06-2017',
  }],
  loading: false,
  errorMessage: false,
};

describe('#loginSuccess()', () => {
  it('should record the userId', () => {
    expect(
      userReducer(
        undefined,
        loginSuccess(
          dummyData.user1,
        )
      )
    ).toMatchSnapshot();
  });
});

describe('signupSuccess()', () => {
  it('should record the userId', () => {
    expect(
      userReducer(
        undefined,
        signupSuccess(
          dummyData.user1,
        )
      )
    ).toMatchSnapshot();
  });
});

describe('logout()', () => {
  it('should restore initialState', () => {
    expect(
      userReducer(
        undefined,
        logout()
      )
    ).toMatchSnapshot();
  });
});
