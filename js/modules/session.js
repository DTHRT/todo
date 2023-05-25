export function createSession(login = '') {
  localStorage.setItem('session', login);
}

export function deleteSession() {
  localStorage.setItem('session', false);
}

export function isSessionActive() {
  const session = localStorage.getItem('session');

  if (session === 'false') {
    return false;
  }

  return session;
}

export function getCurrentSession() {
  return localStorage.getItem('session');
}
