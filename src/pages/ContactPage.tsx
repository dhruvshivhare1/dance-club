import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    // try to go back in history, otherwise go home
    if (window.history.length > 2) navigate(-1)
    else navigate('/')
  }
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Placeholder: client-side demo only — replace with real API endpoint.
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] py-16 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button type="button" onClick={handleBack} className="text-base font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white">
            ← Back
          </button>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold uppercase mb-4">Contact Us</h1>
        <p className="text-sm mb-8">Reach out for auditions, collaborations, demo submissions and press. Use the form or the direct links below.</p>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded bg-[#0B0B0B] border border-[#222] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded bg-[#0B0B0B] border border-[#222] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 rounded bg-[#0B0B0B] border border-[#222] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded bg-[#0B0B0B] border border-[#222] focus:outline-none" />
              </div>

              <div className="flex items-center gap-4">
                <button disabled={status === 'sending'} type="submit" className="rounded-full px-6 py-2 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] text-white font-semibold">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
                <a href="mailto:auditions.labelx@gmail.com" className="text-sm underline">Send Audition Profile</a>
              </div>

              {status === 'success' && <p className="text-sm text-green-400">Thanks — your message was sent (demo).</p>}
              {status === 'error' && <p className="text-sm text-red-400">Something went wrong. Please try again later.</p>}
            </form>
          </div>

          <aside>
            <div className="bg-[#080808] rounded p-6">
              <h3 className="uppercase font-semibold mb-3">Contact Details</h3>
              <p className="text-sm mb-3"><strong>Official:</strong> <a href="mailto:official.labelx@gmail.com" className="underline">official.labelx@gmail.com</a></p>
              <p className="text-sm mb-3"><strong>Auditions / Profiles:</strong> <a href="mailto:auditions.labelx@gmail.com" className="underline">auditions.labelx@gmail.com</a></p>
              <p className="text-sm mb-3"><strong>Songwriters / Submissions:</strong> <a href="mailto:submissions.labelx@gmail.com" className="underline">submissions.labelx@gmail.com</a></p>

              <div className="mt-4">
                <h4 className="uppercase text-xs mb-2">Follow</h4>
                <a href="https://instagram.com/_labelx" target="_blank" rel="noreferrer" className="underline">@_labelx</a>
              </div>

              <div className="mt-6 text-sm">
                <p><strong>Location:</strong> Delhi, India</p>
                <p className="mt-2"><strong>Company:</strong> MUSIC LABELX PVT. LTD.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
