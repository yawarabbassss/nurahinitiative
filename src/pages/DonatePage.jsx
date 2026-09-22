import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const easyPaisaNumber = "03001107814";
  const accountTitle = "Khair un Nisa";

  const handleCopy = () => {
    navigator.clipboard.writeText(easyPaisaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-nurah-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            SUPPORT OUR MOVEMENT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-nurah-berry-dark tracking-tight leading-tight">
            Donate to Nurah Initiative
          </h1>
          <p className="mt-4 text-base text-nurah-berry-dark/80 font-sans leading-relaxed">
            Every contribution directly supports communities in need, fuels social awareness campaigns, and empowers youth change-makers.
          </p>
        </div>

        {/* EasyPaisa Card Container */}
        <div className="bg-nurah-card rounded-3xl p-8 sm:p-12 border border-nurah-berry/20 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-nurah-berry/15">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                EP
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-nurah-berry font-bold block">
                  Official Mobile Transfer Account
                </span>
                <h2 className="font-serif text-2xl font-bold text-nurah-berry-dark">
                  EasyPaisa Transfer
                </h2>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Account</span>
            </span>
          </div>

          {/* Account Details Box */}
          <div className="bg-gradient-to-br from-nurah-bg to-nurah-bg-alt rounded-2xl p-6 border border-nurah-berry/15 space-y-6">
            
            {/* Account Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-nurah-berry/10">
              <span className="text-xs font-mono uppercase text-nurah-berry-muted font-bold">
                Account Title:
              </span>
              <span className="font-serif font-bold text-xl sm:text-2xl text-nurah-berry-dark">
                {accountTitle}
              </span>
            </div>

            {/* Account Number */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-nurah-card p-5 rounded-2xl border border-nurah-berry/20 shadow-inner">
              <div>
                <span className="text-xs font-mono uppercase text-nurah-berry-muted font-bold block mb-1">
                  EasyPaisa Account Number:
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-nurah-berry-dark tracking-wider">
                  {easyPaisaNumber}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-nurah-berry text-nurah-bg hover:bg-nurah-berry-dark'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Account Number</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Transfer Instructions */}
          <div className="space-y-4 bg-nurah-card-subtle p-6 rounded-2xl border border-nurah-berry/10">
            <h3 className="font-serif font-bold text-lg text-nurah-berry-dark flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-nurah-berry" />
              <span>Simple Transfer Instructions</span>
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-sm text-nurah-berry-dark/85 leading-relaxed font-sans">
              <li>Open your <strong>EasyPaisa</strong>, <strong>JazzCash</strong>, or Bank Application.</li>
              <li>Select <strong>Send Money → EasyPaisa Mobile Account</strong>.</li>
              <li>Enter mobile number: <strong className="font-mono text-nurah-berry font-bold">03001107814</strong>.</li>
              <li>Confirm recipient title reads <strong className="font-serif text-nurah-berry-dark">Khair un Nisa</strong> before approving the transfer.</li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}
