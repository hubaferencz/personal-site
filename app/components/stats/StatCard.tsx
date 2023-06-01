type StatCardProps = {
  stat: {
    name: string;
    quant: number;
  };
};

function StatCard({ stat }: StatCardProps) {
  return (
    <div className="w-1/3 dark:bg-lime-400 bg-gray rounded-3xl flex items-center justify-center">
      <div className="aspect-square flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold mb-2">{stat.quant}+</p>
          <h3 className="font-medium text-slate-300">{stat.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
