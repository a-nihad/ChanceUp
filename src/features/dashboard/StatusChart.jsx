import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function StatusChart({ data, heading }) {
  return (
    <div className=" dark:border-dark_grey_light dark:bg-dark_white flex flex-col items-center justify-center rounded-xl border border-color_grey_light bg-white ">
      <h1 className="pt-2 uppercase text-color_text"> {heading} </h1>
      <ResponsiveContainer height={140}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={52}
            outerRadius={70}
            paddingAngle={5}
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="90%"
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatusChart;
