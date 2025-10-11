export function UseAuthentication() {
  async function login(username, password) {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  }

  async function logout() {
    const response = await fetch('/logout', {
      method: 'POST',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Logout failed');
    }
    return response.json();
  }

  async function checkAuth() {
    const response = await fetch('/me', {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Not authenticated');
    }
    return response.json();
  }

  return {
    login,
    logout,
    checkAuth,
  };
}
