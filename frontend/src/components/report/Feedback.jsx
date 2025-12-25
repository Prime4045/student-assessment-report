function generateFeedback(exam, overall, skills) {
    const weakestSkill = Object.entries(skills)
        .sort((a, b) => a[1] - b[1])[0][0];

    if (exam === "IELTS") {
        return `
Your IELTS speaking performance reflects a strong intermediate to upper-intermediate level.

You communicate your ideas clearly and maintain good fluency, which shows confidence during speech.
However, to move closer to a band 8, you should focus more on ${weakestSkill}.
Improving accuracy and range in this area will help you express complex ideas more naturally and precisely.

Practising structured answers, expanding topic-specific vocabulary, and self-reviewing grammar usage will significantly improve your score.
`;
    }

    if (exam === "CEFR") {
        return `
Your CEFR level corresponds to B2, which means you are an independent English user.

You can participate in discussions and explain viewpoints clearly.
To progress towards C1, focus on refining ${weakestSkill} and reducing minor errors.
More exposure to advanced spoken English and deliberate practice will help you reach higher proficiency.
`;
    }

    if (exam === "PTE") {
        return `
Your PTE speaking score indicates good spoken control and clarity.

You speak fluently but there is room for improvement in ${weakestSkill}.
Working on pronunciation clarity and sentence structure consistency will help increase your overall communicative effectiveness.
`;
    }

    if (exam === "TOEFL") {
        return `
Your TOEFL speaking score shows solid academic communication ability.

You express ideas logically and clearly.
To achieve a higher score, focus on ${weakestSkill}, especially in academic contexts.
Practising timed speaking tasks will help improve confidence and precision.
`;
    }

    return `
Your Speechace score indicates good spoken English proficiency.

You demonstrate confidence and fluency in everyday communication.
To improve further, focus on ${weakestSkill}.
Consistent speaking practice, listening to native speakers, and structured feedback will help you progress.
`;
}

function Feedback({ exam, overall, skills }) {
    return (
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
            <h3 className="text-indigo-700 font-semibold mb-3">
                Descriptive Feedback
            </h3>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {generateFeedback(exam, overall, skills)}
            </p>
        </div>
    );
}

export default Feedback;
