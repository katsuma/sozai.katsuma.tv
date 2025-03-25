import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import { type Sozai } from "~/types/sozai";
import fs from "fs";
import path from "path";
import yaml from "yaml";
import { fileURLToPath } from "url";
import shuffle from "lodash/shuffle";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loader({ params }: Route.LoaderArgs) {
  const filePath = path.resolve(__dirname, "../data/images.yml");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return yaml.parse(fileContent) as Sozai[];
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sozai.katsuma.tv" },
    { name: "description", content: "Sozai photos for Ryo Katsuma" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const sozais = loaderData;

  return <Welcome sozais={ shuffle(sozais)}  />;
}
