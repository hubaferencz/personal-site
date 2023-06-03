import { stats } from "../../data";

import StatCard from "./StatCard";

export default function Stats() {
  const formattedStats = stats.map((stat) => ({
    name: stat.name,
    quant: stat.quant,
  }));

  return (
    <section className="h-2/5 flex justify-between space-x-4">
      {formattedStats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </section>
  );
}
