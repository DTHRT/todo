export function createUserObject(loginStr = '', passwordStr = '') {
  const user = {};
  user.login = loginStr;
  user.password = passwordStr;
  return user;
}
