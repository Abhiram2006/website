import { c as createComponent, a as createAstro, b as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderHead, e as renderComponent } from '../chunks/astro/server_Bh0MerO3.mjs';
import 'kleur/colors';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function getAllNotes() {
  const notesDir = path.join(process.cwd(), "publicnotes");
  const files = fs.readdirSync(notesDir);
  return files.filter((file) => file.endsWith(".md")).map((file) => {
    const filePath = path.join(notesDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file.replace(/\.md$/, ""),
      tags: data.tags || []
    };
  });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$NoteList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NoteList;
  const { notes } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div style="margin-bottom: 1rem;" data-astro-cid-j3lkjcys> <label data-astro-cid-j3lkjcys> <input type="checkbox" id="toggle-hidden" data-astro-cid-j3lkjcys>\nShow hidden notes\n</label> </div> <ul data-astro-cid-j3lkjcys> ', ` </ul> <script client:load>
  const checkbox = document.getElementById('toggle-hidden');
  checkbox?.addEventListener('change', () => {
    const hiddenItems = document.querySelectorAll('[data-hidden="true"]');
    hiddenItems.forEach(el => {
      el.style.display = checkbox.checked ? '' : 'none';
    });
  });
<\/script>`])), maybeRenderHead(), notes.map((note) => renderTemplate`<li${addAttribute(note.slug, "key")}${addAttribute(note.tags.includes("hidden") ? "true" : void 0, "data-hidden")}${addAttribute(note.tags.includes("hidden") ? "display: none;" : "", "style")} data-astro-cid-j3lkjcys> <a${addAttribute(`/notes/${note.slug}`, "href")} data-astro-cid-j3lkjcys>${note.title}</a> </li>`));
}, "C:/Users/abhir/texpystorage/website/src/components/NoteList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const notes = getAllNotes();
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><title>Abhiram's Notes</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <section class="intro" data-astro-cid-j7pv25f6> <img src="/me.jpeg" alt="Abhiram Cherukupalli" data-astro-cid-j7pv25f6> <div class="intro-text" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hey, I'm Abhiram Cherukupalli</h1> <p data-astro-cid-j7pv25f6>I'm a sophomore studying physics at Caltech.</p> <p data-astro-cid-j7pv25f6>This is where I drop thoughts and ideas that feel worth sharing — or at least remembering.</p> <p data-astro-cid-j7pv25f6>Some notes are rough, half-baked, or just weird. They’re hidden by default, but you can toggle them if you are brave.</p> <p data-astro-cid-j7pv25f6>Thanks for being part of my journey in finding a clarity in thought.</p> <p data-astro-cid-j7pv25f6>If anything below resonates, email me: <a href="mailto:abhiram@caltech.edu" data-astro-cid-j7pv25f6>abhiram@caltech.edu</a></p> </div> </section> ${renderComponent($$result, "NoteList", $$NoteList, { "notes": notes, "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "C:/Users/abhir/texpystorage/website/src/pages/index.astro", void 0);

const $$file = "C:/Users/abhir/texpystorage/website/src/pages/index.astro";
const $$url = "/<website>";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
