import SkillScores from "./SkillScores";

function SummaryPanel({ overallScore, skills }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-3 gap-6">

            {/* Score Badge */}
            <div className="flex flex-col items-center justify-center bg-green-600 text-white rounded-xl py-10">
                <span className="text-sm uppercase tracking-wide">
                    Speechace
                </span>
                <span className="text-5xl font-bold mt-2">
                    {overallScore}/9
                </span>
                <span className="mt-3 text-sm underline cursor-pointer">
                    Scoring guide
                </span>
            </div>

            {/* Skill Scores */}
            <div className="md:col-span-2">
                <SkillScores skills={skills} />
            </div>
        </div>
    );
}

export default SummaryPanel;
