function SkillScores({ skills }) {
    return (
        <div className="space-y-4">
            {Object.entries(skills).map(([skill, score]) => {
                const barColor =
                    score >= 8 ? "bg-green-500" : "bg-orange-400";

                return (
                    <div key={skill}>
                        <div className="flex justify-between text-sm font-medium text-slate-700">
                            <span className="capitalize">{skill}</span>
                            <span>{score}/10</span>
                        </div>

                        <div className="mt-1 h-2 bg-slate-200 rounded">
                            <div
                                className={`h-2 rounded ${barColor}`}
                                style={{ width: `${(score / 10) * 100}%` }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillScores;
