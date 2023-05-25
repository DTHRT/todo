export function addUser(object = {}) {
  let users = getUsers();
  if (!users) users = [];
  users.push(object);
  localStorage.setItem('users', JSON.stringify(users));
}

export function updateUserData(object = {}) {
  let users = getUsers();
  if (!users) users = [];

  users.map(function (user) {
    if (user.login === object.login) {
      return (user.userData = object.userData);
    }
  });

  localStorage.setItem('users', JSON.stringify(users));
}

export function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

export function isUserExist(loginStr = '', usersArr = []) {
  if (usersArr) {
    for (const el of usersArr) {
      if (el.login === loginStr) return true;
    }
  }
}
