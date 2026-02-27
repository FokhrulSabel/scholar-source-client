import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#d19ef1",
  "#b46be6",
  "#8b3fd6",
  "#6d28d9",
  "#5a189a",
  "#4c1d95",
];

const UniversityPieChart = ({ universityData = [] }) => {
  const pieChartData = universityData.map((item) => ({
    name: item.university,
    value: item.count,
  }));

  const totalApplications = pieChartData.reduce(
    (acc, cur) => acc + cur.value,
    0,
  );

  const topUniversity =
    pieChartData.sort((a, b) => b.value - a.value)[0]?.name || "N/A";

  if (!pieChartData.length) {
    return (
      <div className="rounded-3xl bg-white shadow-lg p-10 text-center">
        <p className="text-gray-400 font-semibold">
          No university data available
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-[2.5rem] 
    bg-gradient-to-br from-white to-purple-50
    border border-purple-100
    shadow-xl hover:shadow-2xl
    transition-all duration-500 p-8"
    >
      {/* Glow Background */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="relative mb-8">
        <h3 className="text-2xl font-black text-[#5a189a]">
          University Distribution
        </h3>

        <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mt-1">
          Scholarship Applications Overview
        </p>
      </div>

      <div className="relative w-full h-[360px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={120}
              paddingAngle={4}
              stroke="none"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  className="cursor-pointer hover:opacity-80 transition-all"
                />
              ))}
            </Pie>

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                background: "linear-gradient(135deg,#ffffff,#faf5ff)",
                boxShadow: "0 10px 25px rgba(91,24,154,0.15)",
                fontWeight: "600",
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
                fontWeight: "600",
                paddingTop: "20px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs text-purple-400 font-bold uppercase">Total</p>
          <h2 className="text-3xl font-black text-[#5a189a]">
            {totalApplications}
          </h2>
          <p className="text-xs text-gray-400">Applications</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-purple-100 grid grid-cols-2 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-purple-400 font-bold">
            Universities
          </p>
          <p className="text-xl font-black text-[#5a189a]">
            {universityData.length}
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest text-purple-400 font-bold">
            Top University
          </p>
          <p className="text-lg font-black text-[#8b3fd6] truncate">
            {topUniversity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversityPieChart;
