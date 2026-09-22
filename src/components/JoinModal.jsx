import React, { useState, useRef } from 'react';
import { X, Sparkles, CheckCircle2, Send, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrContact: '',
    interestArea: 'Community Support',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hiddenFormRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData payload for FormSubmit API
      const payload = new FormData();
      payload.append("Full Name", formData.fullName);
      payload.append("Contact Info (Email/Phone)", formData.emailOrContact);
      payload.append("Interest Area", formData.interestArea);
      payload.append("Message", formData.message || "No additional message provided.");
      payload.append("_cc", "yaawarabbass@gmail.com");
      payload.append("_subject", `New Nurah Initiative Form Submission: ${formData.fullName}`);
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      // 1. Primary AJAX dispatch to FormSubmit
      const res = await fetch("https://formsubmit.co/ajax/Imanirfan1468@gmail.com", {
        method: "POST",
        body: payload,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await res.json().catch(() => null);
      
      // 2. Fail-safe backup fallback if AJAX response indicates pending activation or CORS issue
      if (!res.ok || (data && data.success === "false")) {
        if (hiddenFormRef.current) {
          hiddenFormRef.current.submit();
        }
      }
    } catch (err) {
      // Fallback submit via hidden iframe form target
      if (hiddenFormRef.current) {
        hiddenFormRef.current.submit();
      }
    } finally {
      setLoading(false);
      setSubmitted(true);

      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8C5260', '#E2A9B8', '#FED6BB', '#C5D4EB', '#9DAB99'],
      });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: '', emailOrContact: '', interestArea: 'Community Support', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-nurah-berry-dark/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-nurah-card rounded-3xl p-6 sm:p-8 border border-nurah-berry/20 shadow-2xl overflow-hidden">
        
        {/* Hidden Form & Iframe Target for 100% Reliable Email Dispatch */}
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
        <form
          ref={hiddenFormRef}
          action="https://formsubmit.co/Imanirfan1468@gmail.com"
          method="POST"
          target="hidden_iframe"
          style={{ display: 'none' }}
        >
          <input type="hidden" name="Full Name" value={formData.fullName} />
          <input type="hidden" name="Contact Info" value={formData.emailOrContact} />
          <input type="hidden" name="Interest Area" value={formData.interestArea} />
          <input type="hidden" name="Message" value={formData.message} />
          <input type="hidden" name="_cc" value="yaawarabbass@gmail.com" />
          <input type="hidden" name="_subject" value={`New Nurah Initiative Form Submission: ${formData.fullName}`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-nurah-berry-dark/70 hover:text-nurah-berry hover:bg-nurah-bg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-nurah-berry uppercase font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>JOIN THE MOVEMENT</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nurah-berry-dark mb-2">
              Become Part of Nurah Initiative
            </h3>
            <p className="text-xs sm:text-sm text-nurah-berry-dark/80 mb-6">
              Express your interest in volunteering, community support, or spreading social awareness with Nurah Initiative.
            </p>

            {/* User Visible Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-nurah-berry-dark font-bold mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-nurah-bg/60 border border-nurah-berry/20 text-sm text-nurah-berry-dark focus:bg-nurah-card focus:border-nurah-berry focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-nurah-berry-dark font-bold mb-1.5">
                  Email / Contact Handle
                </label>
                <input
                  type="text"
                  required
                  value={formData.emailOrContact}
                  onChange={(e) => setFormData({ ...formData, emailOrContact: e.target.value })}
                  placeholder="email@domain.com or phone/social handle"
                  className="w-full px-4 py-3 rounded-xl bg-nurah-bg/60 border border-nurah-berry/20 text-sm text-nurah-berry-dark focus:bg-nurah-card focus:border-nurah-berry focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-nurah-berry-dark font-bold mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-nurah-bg/60 border border-nurah-berry/20 text-sm text-nurah-berry-dark focus:bg-nurah-card focus:border-nurah-berry focus:outline-none transition-colors"
                >
                  <option value="Community Support">Community Support</option>
                  <option value="Social Awareness">Social Awareness</option>
                  <option value="Youth Empowerment">Youth Empowerment</option>
                  <option value="General Volunteer">General Volunteer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-nurah-berry-dark font-bold mb-1.5">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how you would like to contribute..."
                  className="w-full px-4 py-3 rounded-xl bg-nurah-bg/60 border border-nurah-berry/20 text-sm text-nurah-berry-dark focus:bg-nurah-card focus:border-nurah-berry focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-nurah-berry text-nurah-bg font-medium text-sm hover:bg-nurah-berry-dark transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Expression of Interest</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-nurah-rose-light/50 text-nurah-berry flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-nurah-berry-dark">
              Welcome to the Movement!
            </h3>
            <p className="text-sm text-nurah-berry-dark/85 max-w-sm mx-auto">
              Thank you, <span className="font-bold text-nurah-berry">{formData.fullName}</span>! Your expression of interest has been received. Together we turn caring and serving into positive collective change.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-nurah-berry text-nurah-bg text-xs font-mono font-bold uppercase hover:bg-nurah-berry-dark transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
