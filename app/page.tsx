export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Meeting Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Keep Meetings On Track<br />
          <span className="text-[#58a6ff]">with AI Agenda Enforcement</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          MeetingGuard monitors your conversations in real time, alerts when discussions go off-topic, and nudges your team back to the agenda — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $6/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎙️", title: "Live Audio Monitoring", desc: "WebRTC-powered real-time conversation analysis as your meeting happens." },
            { icon: "🚨", title: "Off-Topic Alerts", desc: "Instant notifications when the discussion drifts from your agenda items." },
            { icon: "📋", title: "Agenda Tracking", desc: "Visual progress through agenda items with time-on-topic metrics." },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-bold text-white mb-1">$6<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#58a6ff] font-medium mb-6">Pro Plan</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited meetings",
              "Real-time off-topic alerts",
              "AI agenda tracking",
              "WebRTC audio processing",
              "Slack & email notifications",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does MeetingGuard detect off-topic discussions?",
              a: "It uses OpenAI's API to analyze live transcriptions of your meeting audio, comparing conversation content against your predefined agenda items in real time.",
            },
            {
              q: "Does it record or store my meeting audio?",
              a: "No. Audio is processed in-stream and never stored. Only anonymized topic-detection metadata is retained for your analytics dashboard.",
            },
            {
              q: "Which meeting platforms are supported?",
              a: "MeetingGuard works in-browser via WebRTC and integrates with Zoom, Google Meet, and Microsoft Teams through our browser extension.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} MeetingGuard. All rights reserved.
      </footer>
    </main>
  );
}
