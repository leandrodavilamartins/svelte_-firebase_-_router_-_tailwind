<script>
  import { db } from "./main";
  import Router from "../node_modules/svelte-spa-router";
  import About from "./About.svelte";
  import Help from "./Help.svelte";
  export let name;

  console.log(db);
</script>

<main>
  <h1 class="py-8 px-4 border border-indigo-900 shadow-lg">Hello {name}!</h1>
  <div class="container mx-auto border border-indigo-500 px-4">
    <h1 class="font-bold text-5xl">Photo Gallery</h1>
  </div>
  <nav>
    <a href="/#/about">About</a>
    <a href="/#/help">Help</a>
  </nav>
  <Router
    routes={{
      "/about": About,
      "/help": Help,
    }}
  />
  <div class="container mx-auto">
    <h2>Here is a demo test</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
      officiis in voluptatum consectetur fugiat, velit molestias voluptas!
      Delectus ad ea voluptate voluptates, fugit laborum blanditiis ratione
      nobis dolore reiciendis saepe!
    </p>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
