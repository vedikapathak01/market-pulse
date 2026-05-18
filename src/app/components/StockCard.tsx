type Props = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  sentiment: string;
};

export default function StockCard({
  symbol,
  name,
  price,
  change,
  sentiment,
}: Props) {
  return (
    <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{symbol}</h2>
          <p className="text-zinc-400 text-sm">{name}</p>
        </div>

        <div>
          <span>{sentiment}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-3xl font-bold">
          ${price}
        </h3>

        <p>
          {change > 0 ? "+" : ""}
          {change}%
        </p>
      </div>
    </div>
  );
}