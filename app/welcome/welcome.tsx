import { type Sozai } from "~/types/sozai";
import { FaGithub } from "react-icons/fa";

export function Welcome({ sozais }: { sozais: Sozai[] }) {
  return (
    <>
      <main className="flex items-center justify-center pt-8 pb-4">
        <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
          <header className="flex flex-col items-center gap-9">
            <div className="w-[500px] max-w-[100vw] p-4">
              <h1 className="text-4xl font-bold text-center">Sozai.katsuma.tv</h1>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-[1200px]">
            {sozais.map((sozai) => (
              <section key={sozai.id} className="break-inside-avoid">
                <figure>
                  <h2 className="text-2xl font-bold">{sozai.id}</h2>
                  <img
                    alt={sozai.id}
                    className="w-full h-auto rounded-[8px]"
                    src={`/images/${sozai.fileName}`}
                  />
                </figure>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex py-4 justify-center items-center border-t-gray-300 text-gray-400">
        Copyright (c) Ryo Katsuma
        <a
          href="https://github.com/katsuma/sozai.katsuma.tv"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ps-2"
        >
          <FaGithub className="inline-block pe-1 text-2xl" />
          PRs are welcome. Contribute on GitHub.
        </a>
      </footer>
    </>
  );
}
