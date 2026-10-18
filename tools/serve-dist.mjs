// Servidor estático mínimo para los tests: imita a GitHub Pages
// (/ruta → /ruta/ si es un directorio, index.html por defecto, 404.html si no existe).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(import.meta.dirname, "..", "dist");
const port = Number(process.env.PORT ?? 4321);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif",
  ".jpg": "image/jpeg", ".woff2": "font/woff2", ".woff": "font/woff", ".pdf": "application/pdf",
  ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json",
};

async function isDir(path) {
  try { return (await stat(path)).isDirectory(); } catch { return false; }
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  const pathname = decodeURIComponent(url.pathname);
  let file = normalize(join(root, pathname));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  if (await isDir(file)) {
    if (!pathname.endsWith("/")) { res.writeHead(301, { Location: `${pathname}/` }).end(); return; }
    file = join(file, "index.html");
  }
  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" }).end(body);
  } catch {
    const notFound = await readFile(join(root, "404.html")).catch(() => Buffer.from("Not found"));
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }).end(notFound);
  }
}).listen(port, "127.0.0.1", () => console.log(`dist en http://localhost:${port}`));
