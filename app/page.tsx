import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">TR Valorant</h1>
        <hr className="my-4" />
        <p>Valorant - Information</p>
      </div>

      <Image
        src="https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/fullportrait.png"
        alt="Valorant Clove"
        className="animate-pulse"
        width={50}
        height={50}
        priority
        quality={100}
        unoptimized
        style={{
          width: "600px",
          height: "600px",
        }}
      />
      <div className="flex gap-3">
        <Link
          href="https://github.com/Trmxv9"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Termax
        </Link>
        <Link
          href="https://valorant-api.com"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Valorant API
        </Link>
      </div>
    </main>
  );
}
