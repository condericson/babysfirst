export const LOGGING = 'LOGGING';
export const LOGOUT = 'LOGOUT';

export function logging(userId) {
  return {
    type: LOGGING,
    userId,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
