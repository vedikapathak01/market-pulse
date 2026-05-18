export default function Navbar() {
return ( <div className="flex items-center justify-between mb-10"> <input
     type="text"
     placeholder="Search stocks..."
     className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 w-80 outline-none focus:border-zinc-600"
   />

```
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
```

);
}
