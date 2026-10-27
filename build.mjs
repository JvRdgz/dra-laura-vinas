import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

// Keep local development at / and adapt only the published artifact for Pages.
const basePath = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!/^(\/[a-zA-Z0-9._-]+)*$/.test(basePath)) throw new Error('BASE_PATH no válido');
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });

async function adaptDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { await adaptDirectory(path); continue; }
    const extension = extname(path);
    if (!['.html', '.css', '.js'].includes(extension)) continue;
    let source = await readFile(path, 'utf8');
    if (extension === '.html') {
      source = source.replace(/\b(href|src|action)=(["'])\/(?!\/)/g, (_, attribute, quote) => `${attribute}=${quote}${basePath}/`);
    } else if (extension === '.css') {
      source = source.replace(/url\((["']?)\/(?!\/)/g, (_, quote) => `url(${quote}${basePath}/`);
    } else {
      source = source.replace(/(["'])\/images\//g, (_, quote) => `${quote}${basePath}/images/`);
    }
    await writeFile(path, source);
  }
}
if (basePath) await adaptDirectory('dist');
await writeFile('dist/.nojekyll', '');
console.log(`Web lista en dist/ · ruta: ${basePath || '/'}`);
