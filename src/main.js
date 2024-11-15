import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "David McGurk",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: [
      "Agile software development, pipelines, software lifecycles",
    ],
    // Which CI/CD tools do you use in your project?
    tools: "Github actions",
    // What do you want to learn in this workshop?
    expectations: [
      "What CI/CD really means in practice, the basics of jenkins and how that compares to github actions",
    ],
    // What do you like to do when you're not coding?
    hobbies: ["play football", "play guitar and bass", "do my taxes :)"],
  },
});
