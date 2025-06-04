export const loginAdmin = async (credentials) => {
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const isLoggedIn = () => localStorage.getItem('isAdmin') === 'true';
export const logout = () => localStorage.removeItem('isAdmin');
