import Link from "next/link";
export default function Menu() {
  return (
    <menu className="absolute top-0 left-0 right-0 z-10 from-transparent  p-6 text-2xl bg-[#320c55d5]">
      <div className="flex gap-3">
        <button className="text-white hover:text-[#d15151] transition-all">
          <Link href="/">Home</Link>
        </button>
        <button className="text-white hover:text-[#d15151] transition-all">
          <Link href="/agents">Agents</Link>
        </button>
      </div>
    </menu>
  );
}
