import React, { useState } from 'react';
import { X, Copy, Check, Heart, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const easyPaisaNumber = "03001107814";
  const accountTitle = "Khair un Nisa";

  const handleCopy = () => {
    navigator.clipboard.writeText(easyPaisaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-nurah-berry-dark/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-nurah-card rounded-3xl p-6 sm:p-8 border border-nurah-berry/20 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-nurah-berry-dark/70 hover:text-nurah-berry hover:bg-nurah-bg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-nurah-berry uppercase font-bold mb-2">
          <Heart className="w-4 h-4 text-nurah-berry fill-nurah-rose/40" />
          <span>SUPPORT NURAH INITIATIVE</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nurah-berry-dark mb-2">
          Donate to Nurah Initiative
        </h3>

        <p className="text-xs sm:text-sm text-nurah-berry-dark/80 mb-6">
          Your direct contribution empowers youth, supports communities in need, and drives social awareness.
        </p>

        {/* EasyPaisa Box */}
        <div className="bg-gradient-to-br from-nurah-bg to-nurah-bg-alt rounded-2xl p-5 border border-nurah-berry/15 shadow-sm space-y-4 mb-6">
          <div className="flex items-center justify-between pb-3 border-b border-nurah-berry/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                EP
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-nurah-berry font-bold block">
                  Payment Method
                </span>
                <span className="font-serif font-bold text-base text-nurah-berry-dark">
                  EasyPaisa Mobile Account
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
              Verified Account
            </span>
          </div>

          {/* Account Title */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-xs font-mono text-nurah-berry-muted uppercase font-bold">
              Account Title:
            </span>
            <span className="font-serif font-bold text-nurah-berry-dark text-base">
              {accountTitle}
            </span>
          </div>

          {/* Account Number with Copy Button */}
          <div className="bg-nurah-card rounded-xl p-3.5 border border-nurah-berry/20 flex items-center justify-between gap-2 shadow-inner">
            <div>
              <span className="text-[10px] font-mono uppercase text-nurah-berry-muted font-bold block">
                EasyPaisa Number
              </span>
              <span className="font-mono text-lg font-bold text-nurah-berry-dark tracking-wider">
                {easyPaisaNumber}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-nurah-berry text-nurah-bg hover:bg-nurah-berry-dark'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Transfer Instructions */}
        <div className="space-y-2.5 text-xs text-nurah-berry-dark/85 bg-nurah-card-subtle p-4 rounded-xl border border-nurah-berry/10 mb-6">
          <div className="flex items-center gap-2 font-bold text-nurah-berry">
            <Smartphone className="w-4 h-4" />
            <span>How to transfer:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 pl-1 text-[11px] leading-relaxed">
            <li>Open your <strong>EasyPaisa</strong>, <strong>JazzCash</strong>, or Banking App.</li>
            <li>Select <strong>Send Money → EasyPaisa Account</strong>.</li>
            <li>Enter number: <strong className="font-mono text-nurah-berry">03001107814</strong>.</li>
            <li>Verify title reads <strong className="font-serif text-nurah-berry-dark">Khair un Nisa</strong> before confirming.</li>
          </ol>
        </div>

        {/* Note */}
        <div className="flex items-center justify-between text-[11px] text-nurah-berry-dark/70 pt-2 border-t border-nurah-berry/10 font-mono">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Community Impact</span>
          </div>
          <button
            onClick={onClose}
            className="text-nurah-berry hover:underline font-bold"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
