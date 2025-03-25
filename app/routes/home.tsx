import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import { type Sozai } from "~/types/sozai";

import fs from "fs";
import path from "path";
import shuffle from "lodash/shuffle";

export async function loader({ params }: Route.LoaderArgs) {
  const imagesDir = path.resolve(process.cwd(), "public/images");
  let sozais: Sozai[] = [];

  try {
    const files = await fs.promises.readdir(imagesDir);
    sozais = files
      .filter((file) => /\.(png|jpg|gif)$/i.test(file))
      .map((file) => ({
        id: path.parse(file).name,
        fileName: file,
      }));

    sozais = shuffle(sozais);
  } catch (error) {
    console.error("Error reading images directory:", error);
  }

  return sozais;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sozai.katsuma.tv" },
    { name: "description", content: "Sozai photos for Ryo Katsuma" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const sozais = loaderData;

  return <Welcome sozais={sozais} />;
}
