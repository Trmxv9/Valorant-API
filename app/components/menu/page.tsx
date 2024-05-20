import Link from "next/link";
import Image from "next/image";
export default function Menu() {
  return (
    <menu className="absolute top-0 left-0 right-0 z-10 from-transparent  p-6 text-lg bg-[#320c55d5]">
      <div className="flex  gap-3">
        <Link
          href="/"
          className="hover:transform hover:scale-110 transition-all"
        >
          <i className="fa-solid fa-house"></i> Home
        </Link>

        <Link
          href="/v/agents"
          className="flex gap-2 justify-start items-center hover:transform hover:scale-110 transition-all"
        >
          <Image
            src={
              "https://static.vecteezy.com/system/resources/previews/022/636/388/original/valorant-logo-valorant-icon-transparent-free-png.png"
            }
            alt={"valorant"}
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
          />{" "}
          Agents
        </Link>
      </div>
    </menu>
  );
}
