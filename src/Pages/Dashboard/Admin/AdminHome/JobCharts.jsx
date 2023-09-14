import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    pv: 223,
    uv: 400,
  },
  {
    name: "Sun",
    pv: 368,
  },
  {
    name: "Mon",
    pv: 296,
  },
  {
    name: "Tues",
    pv: 236,
  },
  {
    name: "Wed",
    pv: 289,
  },
  {
    name: "	Thurs",
    pv: 250,
  },
  {
    name: "Fri",
    pv: 368,
  },
];

export default function JobChats() {
  return (
    <div className="chat-shadow rounded-lg ">
      <h1 className="text-2xl font-bold mb-4">Job Chart</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#088F8F" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
