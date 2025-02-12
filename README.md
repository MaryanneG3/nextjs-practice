<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">My first Next.js application</a>
      <ul>
        <li><a href="#components">Components</a></li>
         <ul>
            <li><a href="#counter">Counter</a></li>
            <li><a href="#jotai-counter">Counter with Jotai</a></li>
            <li><a href="#customizable-counter">Customizable Counter</a></li>
          </ul>
        <li><a href="#notes">Notes</a></li>
        <ol>
          <li><a href="#next.js">Next.js</a></li>
          <ul>
            <li><a href="#atoms">Atoms</a></li>
            <li><a href="#derived-atoms">Derived atoms</a></li>
            <li><a href="#async-atoms">Async atoms</a></li>
          </ul>
          <li><a href="#jotai">Jotai</a></li>
        </ol>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This application serves as practice for me to learn how to build applications using the following technologies:

[![Next][Next.js]][Next-url]
[![Tailwind][Tailwind]][Tailwind-url]
[![Typescript][Typescript]][Typescript-url]
[![Jotai][Jotai]][Jotai-url]

<a id="components"></a>

### Components

<a id="counter"></a>

#### Counter component

- Consists of a display area with the number 0 and a button
- When the user clicks the button, the number displayed will increment by one

<a id="jotai-counter"></a>

#### Counter using Jotai for state management

- jotai atom is used to manage the state of the count variable

<a id="customizable-counter"></a>

#### Customizable Counter using Jotai for state management

- Derived atom is used to update the state of the count variable depending on a value entered by the user

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Notes

<a id="next.js"></a>

### Next.js

#### Server vs Client components

By default, Next.js converts React components into server-side components. To enable client-side interactivity, such as state management or event handling, you must explicitly declare "use client" in your component. This ensures that the component is rendered on the client side, allowing it to support dynamic behavior.

#### Hot Module Replacement

Changes made to any page in a next app like page.tsx, for instance, can be seen in the browser instantly thanks to Hot Module Replacement.

Hot Module Replacement (HMR) is a feature that allows Next.js (and other modern frameworks) to update modules in a running application without requiring a full page reload. This speeds up development by preserving the application state while making changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="jotai"></a>

### Jotai

Jotai is a minimalistic state management library for React that provides a more atomic and scalable way to manage state. It is designed as an alternative to tools like Redux or React's Context API but with a simpler API and better performance.

Unlike Redux, which relies on a centralized store and reducers, Jotai is based on atoms, which are independent units of state that can be composed and derived.

<a id="atoms"></a>

#### Atoms

An atom is a unit of state in Jotai. Think of it as a piece of state that can be read and written to directly. Atoms are self-contained and do not require a global store.

<a id="derived-atoms"></a>

#### Derived atoms

Derived atoms are atoms whose values are calculated from one or more other atoms. They are read-only atoms that depend on other atoms.

Derived atoms are useful when you need to compute values dynamically based on other atoms.

<a id="async-atoms"></a>

#### Async atoms

Async atoms allow you to work with asynchronous data, such as fetching data from an API. These atoms return a promise, and the state is resolved when the promise is completed.

Useful for managing asynchronous state like loading, data, or error states.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=blue
[Next-url]: https://nextjs.org/
[Tailwind]: https://img.shields.io/badge/tailwind-000000?style=for-the-badge&logo=tailwindcss&logoColor=blue
[Tailwind-url]: https://tailwindcss.com/
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=blue
[Typescript-url]: https://typescriptlang.org/
[Jotai]: https://img.shields.io/badge/jotai-000000?style=for-the-badge
[Jotai-url]: https://jotai.org/
