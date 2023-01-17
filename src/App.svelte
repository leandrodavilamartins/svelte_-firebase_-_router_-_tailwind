<script>
  import { db } from "./main";
  import Router from "../node_modules/svelte-spa-router";
  import About from "./About.svelte";
  import Help from "./Help.svelte";
  export let name;

  console.log(db);
</script>

<main>
  <h1>Hello {name}!</h1>
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
