"use client";

import Image from "next/image";

import {
  useState,
  useEffect,
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  background: string;
  fullPortrait: string;
  backgroundGradientColors: string[];
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
  };
  abilities: {
    [x: string]: any;
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  };
}

export default function Agents() {
  const [agentsData, setAgentsData] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAgentsData() {
      try {
        const response = await fetch("/api/valorant/agents");
        if (response.ok) {
          const data = await response.json();
          if (data.status === 200) {
            setAgentsData(data.data);
          } else {
            console.error("Erro ao obter dados dos agentes:", data.status);
          }
        } else {
          console.error(
            "Falha ao obter dados dos agentes:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erro ao obter dados dos agentes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAgentsData();
  }, []);

  return (
    <main className="flex flex-col min-h-screen p-6 md:p-12 mt-20">
      <div
        className={
          loading
            ? "mt-20"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
        }
      >
        {loading ? (
          <center>
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </center>
        ) : (
          agentsData.map((agent) => (
            <div
              key={agent.uuid}
              className="bg-gradient-to-br p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `url('${
                  agent.background
                }'), linear-gradient(to bottom right, ${agent.backgroundGradientColors
                  .map((color) => `#${color}`)
                  .join(", ")})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
            >
              <Image
                src={`${agent.displayIcon}`}
                alt={`Foto do agente ${agent.displayName}`}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 bg-[#0f0f0fd2]"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <h2 className="text-xl font-semibold text-center">
                {agent.displayName}
              </h2>

              <hr className="w-48 h-1 mx-auto my-4  border-0 rounded dark:bg-blue-500" />

              <p className="text-sm text-gray-200 bg-[#0f0f0fbd] p-2 rounded-sm">
                {agent.description}
              </p>

              <div className="flex justify-center items-center mb-5">
                <Image
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                  className="rounded-lg"
                  width={300}
                  height={300}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div className="mt-10 flex items-center">
                <Image
                  src={`${agent.role.displayIcon}`}
                  alt={`${agent.role.displayName}`}
                  width={80}
                  height={80}
                  className="w-7 h-7 rounded-full mr-4"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                <h2 className="text-lg font-semibold">
                  {agent.role.displayName}
                </h2>
              </div>

              <div className="mt-10">
                <ul className="list-inside list-disc">
                  {agent.abilities.map(
                    (
                      ability: {
                        displayIcon: string | undefined;
                        displayName:
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | Promise<AwaitedReactNode>
                          | null
                          | undefined;
                      },
                      index: Key | null | undefined
                    ) => (
                      <li key={index} className="flex items-center mb-4">
                        {ability.displayIcon && (
                          <Image
                            src={ability.displayIcon}
                            className="w-7 h-7 rounded-full mr-2"
                            alt="Ícone da habilidade"
                            width={80}
                            height={80}
                            loading="lazy"
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        )}
                        {ability.displayIcon && ability.displayName && (
                          <span>{ability.displayName}</span>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
