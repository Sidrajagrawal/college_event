import { useState } from 'react'
import AuthForm from './AuthForm'
import './auth.css'

const roles = [
  { key: 'student', label: 'Student' },
  { key: 'admin', label: 'Admin' },
  { key: 'volunteer', label: 'Volunteer' },
]

export default function LoginSignup() {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [role, setRole] = useState('student')

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="auth-card bg-white rounded-xl shadow-lg w-full max-w-md md:max-w-lg p-6 md:p-8">
        <h1 className="brand text-center text-lg font-semibold text-slate-900">College Event</h1>

        <div className="mode-tabs mt-4 mb-3 flex rounded-lg bg-slate-100 p-1" role="tablist">
          <button
            className={`flex-1 py-2 rounded-md font-semibold ${mode === 'login' ? 'text-white' : 'text-slate-600 bg-white'}`}
            onClick={() => setMode('login')}
            style={mode === 'login' ? { backgroundColor: '#000' , boxShadow: '0 6px 18px rgba(0,0,0,0.12)', color: '#fff' } : {}}
          >
            Log In
          </button>
          <button
            className={`flex-1 py-2 rounded-md font-semibold ${mode === 'signup' ? 'text-white' : 'text-slate-600 bg-white'}`}
            onClick={() => setMode('signup')}
            style={mode === 'signup' ? { backgroundColor: '#000', boxShadow: '0 6px 18px rgba(0,0,0,0.12)', color: '#fff' } : {}}
          >
            Sign Up
          </button>
        </div>

        <div className="role-select mb-4 flex gap-3 justify-center">
          {roles.map(r => (
            <button
              key={r.key}
              onClick={() => setRole(r.key)}
              className={`px-4 py-2 rounded-full font-medium text-sm ${r.key === role ? 'text-white' : 'bg-white text-slate-700 border border-gray-200'}`}
                style={r.key === role ? { backgroundColor: '#000', color: '#fff' } : {}}
            >
              {r.label}
            </button>
          ))}
        </div>

        <AuthForm mode={mode} role={role} />
      </div>
    </div>
  )
}
