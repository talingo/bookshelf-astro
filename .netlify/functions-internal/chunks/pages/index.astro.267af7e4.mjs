/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro.59bf61ab.mjs';
import { $ as $$Layout } from './404.astro.2f4ef793.mjs';
import { b as books } from './_book_.astro.2da3422f.mjs';

const $$Astro$3 = createAstro("https://talingo.github.io");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
    Programming 
    <span class="block text-[36px] md:text-[58px]">Books</span>
</h1>`;
}, "C:/Users/Lautaro/Desktop/bookshelf-astro/src/components/Title.astro", void 0);

const $$Astro$2 = createAstro("https://talingo.github.io");
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const {
    id,
    title,
    img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="inline-block transition-all hover:scale-105 hover:contrast-125 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}>
    <img${addAttribute(`${title}'s book cover'`, "alt")} class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`view-transition-name: book-${id}`, "style")}>
  </a>`;
}, "C:/Users/Lautaro/Desktop/bookshelf-astro/src/components/BookItem.astro", void 0);

const $$Astro$1 = createAstro("https://talingo.github.io");
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
  ${books.map(({ id, title, img }) => {
    return renderTemplate`<li>
          ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}
        </li>`;
  })}
</ul>`;
}, "C:/Users/Lautaro/Desktop/bookshelf-astro/src/components/ListOfBooks.astro", void 0);

const $$Astro = createAstro("https://talingo.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Programming Books." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="m-auto max-w-4xl">
		${renderComponent($$result2, "Title", $$Title, {})}

		${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}
	</main>
` })}`;
}, "C:/Users/Lautaro/Desktop/bookshelf-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lautaro/Desktop/bookshelf-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
