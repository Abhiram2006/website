import { c as createComponent, a as createAstro, r as renderHead, u as unescapeHTML, b as renderTemplate } from '../../chunks/astro/server_Bh0MerO3.mjs';
import 'kleur/colors';
import 'clsx';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import katex from 'katex';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const notesDir = path.join(process.cwd(), "publicnotes");
  const files = fs.readdirSync(notesDir);
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    return { params: { slug } };
  });
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const filePath = path.join(process.cwd(), "publicnotes", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  let html = marked.parse(content);
  function replaceMathOutsideTags(html2) {
    const parts = html2.split(/(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>)/gi);
    return parts.map((part) => {
      if (/<pre|<code/i.test(part)) return part;
      part = part.replace(
        /\$\$([^$]+)\$\$/g,
        (_, math) => `<div class="katex-block">${katex.renderToString(math.trim(), { displayMode: true })}</div>`
      );
      part = part.replace(
        /(^|[^\\])\$([^\$]+?)\$/g,
        (_, pre, math) => `${pre}${katex.renderToString(math.trim(), { displayMode: false })}`
      );
      return part;
    }).join("");
  }
  html = replaceMathOutsideTags(html);
  return renderTemplate`<html lang="en" data-astro-cid-fezs4xpw> <head><meta charset="UTF-8"><title>${data.title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">${renderHead()}</head> <body data-astro-cid-fezs4xpw> <a href="/" data-astro-cid-fezs4xpw>← Back to notes</a> <h1 data-astro-cid-fezs4xpw>${data.title}</h1> <div data-astro-cid-fezs4xpw>${unescapeHTML(html)}</div> </body></html>`;
}, "C:/Users/abhir/texpystorage/website/src/pages/notes/[slug].astro", void 0);

const $$file = "C:/Users/abhir/texpystorage/website/src/pages/notes/[slug].astro";
const $$url = "/<website>/notes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
