import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function ScoreChart({ skills }) {
    const data = {
        labels: Object.keys(skills).map(
            (skill) => skill.charAt(0).toUpperCase() + skill.slice(1)
        ),
        datasets: [
            {
                label: "Skill Scores",
                data: Object.values(skills),
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                borderColor: "rgba(76, 175, 80, 1)",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                min: 0,
                max: 9,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <div className="bg-slate-50 rounded-lg p-4 max-w-md mx-auto">
            <h3 className="text-center text-slate-600 font-medium mb-2 text-sm">
                Skill Analysis
            </h3>
            <Radar data={data} options={options} />
        </div>
    );


}

export default ScoreChart;
