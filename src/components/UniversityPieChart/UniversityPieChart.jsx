import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#d19ef1", "#b46be6", "#8b3fd6", "#6d28d9", "#5a189a"];

const UniversityPieChart = ({ universityData = [] }) => {
  // Transform Data
  const pieChartData = useMemo(() => {
    return universityData.map((item) => ({
      name: item.university,
      value: item.count,
    }));
  }, [universityData]);

  const totalApplications = useMemo(() => {
    return pieChartData.reduce((acc, item) => acc + item.value, 0);
  }, [pieChartData]);

  const topUniversity = useMemo(() => {
    if (!pieChartData.length) return "N/A";
    return [...pieChartData].sort((a, b) => b.value - a.value)[0].name;
  }, [pieChartData]);

  return (
    <div className="bg-base-100 border border-primary/10 rounded-3xl p-8 w-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-base-content">
          Application Distribution
        </h3>
        <p className="text-sm text-base-content/60 mt-1">
          Breakdown of scholarship applications by university
        </p>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 350 }}>
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
              paddingAngle={3}
              stroke="none"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                />
              ))}
            </Pie>

            {/* Clean Modern Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                fontSize: "13px",
              }}
              formatter={(value) => [`${value} Applications`, "Count"]}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "13px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-3xl font-bold text-primary">{totalApplications}</p>
          <p className="text-xs uppercase tracking-widest text-base-content/50">
            Total Applications
          </p>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="mt-8 pt-6 border-t border-primary/10 grid grid-cols-2 text-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-base-content/40">
            Universities
          </p>
          <p className="text-xl font-semibold text-base-content">
            {universityData.length}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-base-content/40">
            Leading University
          </p>
          <p className="text-xl font-semibold text-primary truncate">
            {topUniversity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversityPieChart;
