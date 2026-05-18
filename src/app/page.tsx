"use client";
import { useState } from "react";

import {
LineChart,
Line,
ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

const stocks = [
{
symbol: "NVDA",
name: "NVIDIA",
price: 145.32,
sentiment: "Bullish",
data: [
{ value: 20 },
{ value: 35 },
{ value: 25 },
{ value: 50 },
{ value: 40 },
],
},

{
symbol: "TSLA",
name: "Tesla",
price: 177.81,
sentiment: "Bearish",
data: [
{ value: 50 },
{ value: 40 },
{ value: 35 },
{ value: 30 },
{ value: 25 },
],
},

{
symbol: "AAPL",
name: "Apple",
price: 212.44,
sentiment: "Neutral",
data: [
{ value: 10 },
{ value: 20 },
{ value: 30 },
{ value: 25 },
{ value: 40 },
],
},
];

export default function Home() {
const [search, setSearch] = useState("");

return ( <main className="min-h-screen bg-black text-white flex">

```
  {/* Sidebar */}
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

  {/* Main Content */}
  <section className="flex-1 p-8">

    {/* Navbar */}
    <div className="flex items-center justify-between mb-10">

      <input
        type="text"
        placeholder="Search stocks..."
        value={search}
onChange={(e) => setSearch(e.target.value)}

        className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 w-80 outline-none focus:border-zinc-600"
      />

      <div className="flex items-center gap-4">

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
          Market Open
        </div>

        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
          🔔
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600" />

      </div>
    </div>

    {/* Heading */}
    <h1 className="text-5xl font-bold">
      Market Pulse
    </h1>

    {/* Stock Cards */}
    <div className="mt-10 grid md:grid-cols-3 gap-6">
  {stocks
.filter((stock) =>
stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
stock.name.toLowerCase().includes(search.toLowerCase())
)
.map((stock) => (

        <motion.div
          key={stock.symbol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
        >
          <h2 className="text-2xl">
            {stock.symbol}
          </h2>

          <p>{stock.name}</p>

          <div className="mt-3">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                stock.sentiment === "Bullish"
                  ? "bg-green-500/20 text-green-400"
                  : stock.sentiment === "Bearish"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {stock.sentiment}
            </span>
          </div>

          <p className="mt-3 text-2xl">
            ${stock.price}
          </p>

          <div className="h-24 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stock.data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trending Stocks */}
    <div className="mt-10">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Trending Stocks
        </h2>

        <p className="text-zinc-500 text-sm">
          Updated 2 mins ago
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              AMD
            </h3>

            <span className="text-green-400">
              +12%
            </span>
          </div>

          <p className="text-zinc-400 mt-2">
            AI chip discussions surging across Reddit and tech news.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              META
            </h3>

            <span className="text-green-400">
              +8%
            </span>
          </div>

          <p className="text-zinc-400 mt-2">
            Retail investor optimism increasing after VR ecosystem updates.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              TSLA
            </h3>

            <span className="text-red-400">
              -5%
            </span>
          </div>

          <p className="text-zinc-400 mt-2">
            EV competition concerns causing sentiment decline.
          </p>
        </div>

      </div>
    </div>

    {/* AI Insights */}
    <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Market Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-black/30 border border-zinc-800 rounded-xl p-4">
          <h3 className="font-semibold text-green-400">
            NVIDIA
          </h3>

          <p className="text-zinc-400 mt-2">
            AI infrastructure discussions are increasing rapidly across tech news and retail investor communities.
          </p>
        </div>

        <div className="bg-black/30 border border-zinc-800 rounded-xl p-4">
          <h3 className="font-semibold text-red-400">
            Tesla
          </h3>

          <p className="text-zinc-400 mt-2">
            Market sentiment weakened after mixed EV delivery expectations and growing competition concerns.
          </p>
        </div>

       </div>
    </div>

  </section>

</main>

  );
}