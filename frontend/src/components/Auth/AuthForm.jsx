import { useState } from 'react'

export default function AuthForm({ mode = 'login', role = 'student' }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', college: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [isOtpStage, setIsOtpStage] = useState(false)
  const [otp, setOtp] = useState('')
  const [verifyLoading, setVerifyLoading] = useState(false)
  const [verifyMessage, setVerifyMessage] = useState(null)

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

      // Simulate successful signup and OTP send (UI-only)
      setTimeout(() => {
        setLoading(false)
        setIsOtpStage(true)
        setMessage(null)
        setVerifyMessage({ type: 'success', text: 'You are registered successfully!' })
      }, 800)
      return
    }

    // Simulate login success (UI-only)
    setTimeout(() => {
      setLoading(false)
      setMessage({ type: 'success', text: 'Logged in successfully' })
    }, 600)
  }

  async function handleVerify(e) {
    e.preventDefault()
    setVerifyMessage(null)
    setVerifyLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setVerifyLoading(false)
      setVerifyMessage({ type: 'success', text: 'OTP verified successfully' })
      setIsOtpStage(false)
    }, 700)
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
    </form>
  )
}
