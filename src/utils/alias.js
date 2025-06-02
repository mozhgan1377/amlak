import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const aliases = {
  "@middlewares": resolve(__dirname, "./middlewares"),
  "@constants": resolve(__dirname, "./constants"),
};
