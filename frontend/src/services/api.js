const BASE = import.meta.env.VITE_API_URL || '' // set to backend URL in environment

async function auth(mode, payload) {
  // mode: 'login' or 'signup'
  // payload should include 'role' and other fields
  const url = `${BASE}/auth/${mode}`

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  })
}

async function verifyOtp(payload) {
  const url = `${BASE}/auth/verify-otp`
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  })
}

export default {
  auth,
  verifyOtp,
}