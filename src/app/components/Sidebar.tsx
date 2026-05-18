export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold">
        Market Pulse
      </h2>

      <nav className="mt-10 space-y-4">
        <p className="text-zinc-400 hover:text-white cursor-pointer">
          Dashboard
        </p>

        <p className="text-zinc-400 hover:text-white cursor-pointer">
          Watchlist
        </p>

        <p className="text-zinc-400 hover:text-white cursor-pointer">
          Trending
        </p>

        <p className="text-zinc-400 hover:text-white cursor-pointer">
          AI Insights
        </p>
      </nav>
    </aside>
  );
}