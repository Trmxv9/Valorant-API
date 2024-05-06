import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">TR Valorant</h1>
        <hr className="my-4" />
        <p>Valorant Information Agents, Weapons and more</p>
      </div>

      <img
        src="https://valorant-api.com/assets/img/logo_transparent.png?v=1"
        alt="Valorant API Logo"
        className="w-[400px] h-[400px] animate-pulse"
        loading="lazy"
      />

      <div className="flex gap-3">
        <p>
          By{" "}
          <Link
            href="https://github.com/Trmxv9"
            target="_blank"
            className="underline hover:text-red-500 transition-all"
          >
            Termax
          </Link>
        </p>
        <p>
          By{" "}
          <Link
            href="https://valorant-api.com"
            target="_blank"
            className="underline hover:text-red-500 transition-all"
          >
            Valorant API
          </Link>
        </p>
      </div>
    </main>
  );
}
