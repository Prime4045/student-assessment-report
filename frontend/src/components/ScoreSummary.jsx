import { useState } from "react";
import CandidateInfo from "./report/CandidateInfo";
import ScoreTabs from "./report/ScoreTabs";
import SummaryPanel from "./report/SummaryPanel";
import ScoreChart from "./report/ScoreChart";
import Feedback from "./report/Feedback";

function ScoreSummary({ report }) {
    const [activeExam, setActiveExam] = useState("Speechace");

    const examData = report.exams[activeExam];

    return (
        <div className="space-y-8">
            <CandidateInfo name={report.studentName} />

            <ScoreTabs active={activeExam} onChange={setActiveExam} />

            <h3 className="text-xl font-serif text-slate-800">
                Summary of Scores – {activeExam}
            </h3>

            <SummaryPanel
                overallScore={examData.overall}
                skills={examData.skills}
                exam={activeExam}
            />

            <ScoreChart
                skills={examData.skills}
                exam={activeExam}
            />

            <Feedback
                exam={activeExam}
                overall={examData.overall}
                skills={examData.skills}
            />
        </div>
    );
}

export default ScoreSummary;
