import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">TR Valorant</h1>
        <hr className="my-4" />
        <p>Valorant Information Agents, Weapons and more</p>
      </div>

      <Image
        src="https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/fullportrait.png"
        alt="Valorant API Logo"
        className="animate-pulse"
        width={600}
        height={600}
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
