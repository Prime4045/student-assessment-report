import { useEffect, useState } from "react";
import { fetchReport } from "./api";
import Header from "./components/layout/Header";
import ScoreSummary from "./components/ScoreSummary";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport().then(setReport);
  }, []);

  if (!report) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <ScoreSummary report={report} />
      </main>
    </div>
  );
}

export default App;
