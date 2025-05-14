import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(66, 135, 245)",
        "rgba(117, 245, 66)",
        "rgba(245, 96, 66)",
        "rgba(245, 66, 224)",
      ],
      borderColor: [
        "66, 135, 245",
        "rgba(117, 245, 66)",
        "rgba(245, 96, 66)",
        "rgba(245, 66, 224)",
      ],
      borderWidth: 1,
    },
  ],
};

const BestSellingProductChart = () => {
  return (
    <div className="p-8 shadow-xl rounded-lg dark:text-slate-50 dark:bg-slate-700 bg-slate-50 text-slate-900">
      <h2 className="text-xl font-semibold">Best Selling Product Chart</h2>
      <Pie data={data} className="text-slate-50" />;
    </div>
  );
};

export default BestSellingProductChart;
