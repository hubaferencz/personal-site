import StatCard from "./StatCard";

type Props = {};

function Stats({}: Props) {
  return (
    <div className="h-2/5 flex justify-between space-x-4">
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
}

export default Stats;
