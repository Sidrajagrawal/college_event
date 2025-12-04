import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function AuthForm({ mode = 'login', role = 'student' }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', college: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [isOtpStage, setIsOtpStage] = useState(false)
  const [otp, setOtp] = useState('')
  const [verifyLoading, setVerifyLoading] = useState(false)
  const [verifyMessage, setVerifyMessage] = useState(null)

  const BASE_API = `http://localhost:8080/api/auth`;

  function update(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  function mapRole(r) {
    if (!r) return 'Attendee'
    const m = { student: 'Attendee', admin: 'Admin', volunteer: 'Volunteer' }
    return m[r] || 'Attendee'
  }

  async function onSubmit(e) {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    try {
      if (mode === 'signup') {
        if (form.password !== form.confirmPassword) {
          setMessage({ type: 'error', text: 'Passwords do not match' })
          setLoading(false)
          return
        }

        const payload = {
          username: form.name,
          email: form.email,
          password: form.password,
          Cpassword: form.confirmPassword,
          role: mapRole(role),
        }
        console.log(payload);
        
        const res = await axios.post(`${BASE_API}/register`, payload)
        const data = res.data || {}
        setLoading(false)
        setIsOtpStage(true)
        setVerifyMessage({ type: 'success', text: data.msg || 'Registered — OTP sent' })
        toast.success(data.msg || 'Registered — OTP sent')
        return
      }

      // login
      const loginPayload = { email: form.email, password: form.password }
      const res = await axios.post(`${BASE_API}/login`, loginPayload, { withCredentials: true })
      const data = res.data || {}
      toast.success(data.msg || 'Logged in successfully')
      setMessage({ type: 'success', text: data.msg || 'Logged in successfully' })
      setLoading(false)
    } catch (err) {
      const msg = err?.response?.data?.msg || err.message || 'Network error'
      toast.error(msg)
      setMessage({ type: 'error', text: msg })
      setLoading(false)
    }
  }

  async function handleVerify(e) {
    e.preventDefault()
    setVerifyMessage(null)
    setVerifyLoading(true)
    try {
      try {
        const res = await axios.post(`${BASE_API}/verify-otp`, { email: form.email, otp })
        const data = res.data || {}
        toast.success(data.msg || 'OTP verified successfully')
        setVerifyMessage({ type: 'success', text: data.msg || 'OTP verified successfully' })
        setIsOtpStage(false)
        setVerifyLoading(false)
      } catch (err) {
        const msg = err?.response?.data?.msg || err.message || 'OTP verification failed'
        toast.error(msg)
        setVerifyMessage({ type: 'error', text: msg })
        setVerifyLoading(false)
      }
    } catch (err) {
      const msg = err?.response?.data?.msg || err.message || 'Network error'
      toast.error(msg)
      setVerifyMessage({ type: 'error', text: msg })
      setVerifyLoading(false)
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

      <label className="text-sm text-slate-700 flex flex-col">
        Password
        <div className="mt-2 flex items-center">
          <input name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={update} required className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button type="button" onClick={() => setShowPassword(s => !s)} className="ml-2 px-3 py-2 text-sm rounded bg-gray-100 hover:bg-gray-200">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>

      {/* Student: replace college field with Confirm Password */}
      {showStudentConfirm && (
        <label className="text-sm text-slate-700 flex flex-col">
          Confirm Password
          <div className="mt-2 flex items-center">
            <input name="confirmPassword" type={showConfirm ? 'text' : 'password'} value={form.confirmPassword} onChange={update} required className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button type="button" onClick={() => setShowConfirm(s => !s)} className="ml-2 px-3 py-2 text-sm rounded bg-gray-100 hover:bg-gray-200">
              {showConfirm ? 'Hide' : 'Show'}
            </button>
          </div>
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

      {/* Signup OTP flow: after successful signup show two boxes + OTP input + Verify button */}
      {isOtpStage && (
        <div className="mt-4 flex flex-col gap-3 items-center">
          <div className="w-full max-w-sm rounded-lg p-3 bg-green-50 border border-green-100 text-green-800 text-sm shadow-sm">
            You are registered successfully!
          </div>
          <div className="w-full max-w-sm rounded-lg p-3 bg-white border border-slate-100 text-slate-800 text-sm shadow-sm">
            OTP sent successfully on your email!
          </div>

          <label className="w-full max-w-sm text-sm text-slate-700">
            Enter OTP
            <input name="otp" value={otp} onChange={e => setOtp(e.target.value)} className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </label>

          <div className="w-full max-w-sm flex justify-center">
            <button onClick={handleVerify} disabled={verifyLoading} className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold">
              {verifyLoading ? 'Verifying...' : 'Verify'}
            </button>
          </div>

          {verifyMessage && (
            <div className={`mt-3 w-full max-w-sm rounded-lg p-3 text-sm ${verifyMessage.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
              {verifyMessage.text}
            </div>
          )}
        </div>
      )}

      {message && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
          {message.text}
        </div>
      )}
      <Toaster />
    </form>
  )
}