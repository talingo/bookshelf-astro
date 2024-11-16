/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.59bf61ab.mjs';
import { $ as $$Layout } from './404.astro.2f4ef793.mjs';

const books = [
  {
    id: 'clean-code',
    title: 'Clean Code: Manual de desarrollo ágil de software',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    opinion: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    author: 'Robert C. Martin',
  },
  {
    id: 'aprendiendo-git',
    title: 'Aprendiendo Git',
    img: "https://d2sofvawe08yqg.cloudfront.net/aprendiendo-git/s_hero2x?1628527844",
    opinion: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    author: 'Miguel Angel Durán'
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
    opinion: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
    opinion: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    author: 'Douglas Crockford',
  },
  {
    id: 'eloquent-javascript',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
    opinion: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    author: 'Marijn Haverbeke',
  }
];

const $$Astro = createAstro("https://talingo.github.io");
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id == book);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${info.title}` }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<main class="m-auto max-w-4xl">
        <header class="relative">
            <div class="flex gap-x-4 justify-around items-center">
                <a href="/" type="button" class="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 
                dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                    </svg>
                    <span class="sr-only">Icon description</span>
                  </a>
                  
          <h1 class="scale-50 font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
                  Programming 
                  <span class="block text-[36px] md:text-[58px]">Books</span>
              </h1>
              
            </div>
        </header>
        <div class="grid grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">
            <div class="flex flex-col mb-10">
                <picture class="mb-8 w-full relative">
                    <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(info.img, "src")}${addAttribute(`${info.title} book cover`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}>
                </picture>    
                <a href="#" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
                    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                    </svg>
                    Buy now
                </a>
            </div>
            <aside class="mt-10 md:mt-0">
                <h1 class="text-5xl font-black md:mt-10 mb-4">${info.title}</h1>
                <p class="text-lg mb-4">${info.opinion}</p>
                <p><strong>Author:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p>
            </aside>
    </div>
</main>` })}`;
}, "C:/Users/Lautaro/Desktop/bookshelf-astro/src/pages/[book].astro", void 0);

const $$file = "C:/Users/Lautaro/Desktop/bookshelf-astro/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };
