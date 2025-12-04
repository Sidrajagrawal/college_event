import { useState } from 'react'
import api from '../../services/api'

export default function AuthForm({ mode = 'login', role = 'student' }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', college: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  function update(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setMessage(null)
    setLoading(true)

    // Basic client-side check: ensure confirm password matches on signup
    if (mode === 'signup') {
      if (form.password !== form.confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match' })
        setLoading(false)
        return
      }
    }

    const payload = { role, ...form }

    try {
      const res = await api.auth(mode, payload)
      if (res.ok) {
        const data = await res.json()
        setMessage({ type: 'success', text: data.message || `${mode} successful` })
      } else {
        const err = await res.json().catch(() => ({}))
        setMessage({ type: 'error', text: err.message || 'Server validation failed' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  const showName = mode === 'signup'
  const showStudentConfirm = mode === 'signup' && role === 'student'
  const showAdminConfirm = mode === 'signup' && role === 'admin'
  const showVolunteerConfirm = mode === 'signup' && role === 'volunteer'

  return (
    <form onSubmit={onSubmit} className="auth-form flex flex-col gap-3">
      {showName && (
        <label className="text-sm text-slate-700">
          Full name
          <input name="name" value={form.name} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </label>
      )}

      <label className="text-sm text-slate-700">
        Email
        <input name="email" type="email" value={form.email} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      </label>

      <label className="text-sm text-slate-700">
        Password
        <input name="password" type="password" value={form.password} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      </label>

      {/* Student: replace college field with Confirm Password */}
      {showStudentConfirm && (
        <label className="text-sm text-slate-700">
          Confirm Password
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </label>
      )}

      {/* Admin: show confirm password instead of admin code */}
      {showAdminConfirm && (
        <label className="text-sm text-slate-700">
          Confirm Password
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </label>
      )}

      {/* Volunteer: add confirm password field in addition to other fields */}
      {showVolunteerConfirm && (
        <label className="text-sm text-slate-700">
          Confirm Password
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} required className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </label>
      )}

      <div className="form-actions mt-3 flex justify-center">
        <button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold">
          {loading ? (mode === 'login' ? 'Logging in...' : 'Signing up...') : (mode === 'login' ? 'Log In' : 'Sign Up')}
        </button>
      </div>

      {message && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
          {message.text}
        </div>
      )}
    </form>
  )
}
