import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Github, ExternalLink, MessageSquare, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate secure client-side dispatch and prepare mailto fallback
    setTimeout(() => {
      setStatus('success');
      // Create mailto link for direct transmission
      const mailtoUrl = `mailto:joeltcyril@gmail.com?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry from ' + formState.name
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;

      // Open email client in background
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#ff5d35]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
              07 // GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's build something{' '}
            <span className="font-display italic font-normal text-gradient-accent">
              remarkable together.
            </span>
          </h2>
          <p className="text-base text-slate-300">
            Interested in collaborating on embedded electronics, high-scale web platforms, autonomous robotics, or talking engineering? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#ff5d35]" />
                <span>Direct Channels</span>
              </h3>
              
              <div className="space-y-4 text-sm font-mono">
                <a
                  href="mailto:joeltcyril@gmail.com"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center gap-3.5 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#ff5d35]/15 text-[#ff7e5d] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Email Address</span>
                    <span className="font-semibold text-white">joeltcyril@gmail.com</span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3.5 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block">Current Location</span>
                    <span className="font-semibold text-white">Abu Dhabi, United Arab Emirates</span>
                  </div>
                </div>

                <a
                  href="https://github.com/JoelCyril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center justify-between text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.08] text-white group-hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 block">Open Source</span>
                      <span className="font-semibold text-white">github.com/JoelCyril</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Live Projects Links */}
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.08]">
              <p className="text-xs font-mono font-bold uppercase text-slate-400 mb-3">
                Live Platforms to Test
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://swap-xi-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                >
                  <span>↔ SwapUAE Live Marketplace</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ff5d35]" />
                </a>
                <a
                  href="https://pulso-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                >
                  <span>♥ Pulso.ai Health Analytics</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formState.name}! Your default email client has been opened with your inquiry pre-filled to <span className="font-mono text-emerald-400">joeltcyril@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-mono bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                        Your Name <span className="text-[#ff5d35]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5d35] focus:ring-1 focus:ring-[#ff5d35] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                        Email Address <span className="text-[#ff5d35]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5d35] focus:ring-1 focus:ring-[#ff5d35] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Collaboration / Electronics / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5d35] focus:ring-1 focus:ring-[#ff5d35] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Message <span className="text-[#ff5d35]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Joel, I saw your work on Reaper One and SwapUAE and wanted to connect..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff5d35] focus:ring-1 focus:ring-[#ff5d35] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white font-semibold text-sm shadow-lg shadow-[#ff5d35]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span className="font-mono text-xs">Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
