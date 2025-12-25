function CandidateInfo({ name }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-serif text-slate-800">
                {name}
            </h2>

            <p className="mt-2 text-slate-500">
                Test Date: Oct 14, 2021
            </p>

            <p className="mt-4 text-sm text-slate-500">
                This report link can be shared securely.
            </p>
        </div>
    );
}

export default CandidateInfo;
