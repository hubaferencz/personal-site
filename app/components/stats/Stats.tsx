import StatCard from "./StatCard";

interface StatData {
  name: string;
  quant: number;
}

export default function Stats() {
  const statsData: StatData[] = [
    { name: "Years", quant: 5 },
    { name: "Works", quant: 32 },
    { name: "Clients", quant: 27 },
  ];

  const formattedStats = statsData.map((stat) => ({
    name: stat.name,
    quant: stat.quant,
  }));

  return (
    <div className="h-2/5 flex justify-between space-x-4">
      {formattedStats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
}
