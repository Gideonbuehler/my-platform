import './App.css'

type ReportKind = 'bug' | 'feature’
type Report = {
id: string
text: string
kind: ReportKind
}

function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
    }

  return (
    <>
      <header className="site-header">
        <span className="site-header__name">Gideon Buehler</span>
        <span className="site-header__tag">Senior Capstone</span>
      </header>

      <main className="intro">
        <section className="intro__card">
          <div className="intro__icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>

          <h1>Gideon Buehler</h1>
          <p className="intro__major"></p>

          <p className="intro__bio">
            I'm a computer science student who enjoys building practical
            software, from clean user interfaces to the production systems
            behind them. I also have an interest in cybersecurity, particularly red teaming and penetration testing.</p>
        </section>

        <section className="report-board">
          <h2>Bugs & Feature Requests</h2>
          <p>{sampleReport.text} ({sampleReport.kind})</p>
        </section>
      </main>
    </>
  )
}

export default App