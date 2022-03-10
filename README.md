# Sveltejs Workshop

This documentation will be used to explain for the Sveltejs Workshop!

Strongly recommend you to take a look at [https://github.com/kamranahmedse/developer-roadmap](https://github.com/kamranahmedse/developer-roadmap) to see the roadmap of our <s>dying</s> exciting programmer life!

> Do checkout [Sveltejs Tutorials](https://svelte.dev/tutorial), best-ever tutorial online!

[Slides](https://slides.com/rainchai/sveltejs/fullscreen) (Or clone this repo and open slides-sveltejs.html!)

## 📝 Table of Contents

- [Front-end framework? For what!](#why)
- [What is sveltejs?](#what)
- [Let's get dirty (demo)](#how)
- [Adding data](https://svelte.dev/tutorial/adding-data)
- [Dynamic attributes](https://svelte.dev/tutorial/dynamic-attributes)
- [Styling](https://svelte.dev/tutorial/styling)
- [Import and export components!](https://svelte.dev/tutorial/nested-components)
- [Props! Let your parents take control their children!](https://svelte.dev/tutorial/declaring-props)
- [A simple counter button!](https://svelte.dev/tutorial/reactive-assignments)
- [Binding data, using range input](https://svelte.dev/tutorial/text-inputs)
- [More to explore!](https://github.com/kamranahmedse/developer-roadmap)

## Front-end framework? For what! <a name="#why"></a>

> The problem that a framework is trying to solve is maintainability and scalability.

Just look into any programming framework (i.e. SvelteJS, Laravel, Django, NestJS), what it is trying to introduce is the convention of programming on a certain field ( Front-end or Back-end ).

We can of course program everything from grown-up, but sooner when we scale the project, it will become more and more unmaintable, and harder to pass down the knowledge.

When it comes to front-end, here is a clue on how can you decide whether do you really need a framework for front-end:

1. Super small scale project: Just a single web page
    - You may use plain HTML & CSS
2. Anything else: Framework

Generally, Front-end framework can be categorized into following:

1. Client-side rendering
2. Server-side rendering

* And of course the brand new hybrid way: Server-generated-client-rendering ( Which is going to be SvelteKit )

## What is SvelteJS? <a name="#what"></a>

SvelteJS is a client-side rendering framework, you can think of it like your visitor will generate the HTML code on the fly in their machine.

Comparitively, server-side rendering means the HTML code will be generated at the server, and send to your visitor.

You might heard of ReactJS before ( or VueJS ), but there is a significant different between SvelteJS and ReactJS: SvelteJS is a compiler and has no shadow DOM.

What it means is, SvelteJS will compile your code into plain JavaScript, while ReactJS has an "interpreter" that goes through the ReactJS to interprete on the fly ( which resulting to larger bundle size & lower performance )

## Let's get dirty (demo)

It's easier to see it in action, let's get started!
We will be looking into these modules:

**Basic**: Create a simple TODO app [https://putodo.netlify.app/](https://putodo.netlify.app/)
1. [Adding data](https://svelte.dev/tutorial/adding-data)
2. [Dynamic attributes](https://svelte.dev/tutorial/dynamic-attributes)
3. [Styling](https://svelte.dev/tutorial/styling)
4. [Import / export](https://svelte.dev/tutorial/nested-components)
5. [Conditional logic / control flow](https://svelte.dev/tutorial/nested-components)
6. [Handling DOM events](https://svelte.dev/tutorial/nested-components)

**Advance**
7. [Lifecycle](https://svelte.dev/tutorial/onmount)
8. [Stores](https://svelte.dev/tutorial/writable-stores)
9. [Slots](https://svelte.dev/tutorial/slots)
