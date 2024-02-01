// Phase 1
// core react file.
// creating h1 element inside the react.
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world with the help of react."
// );

// react Dom
// when we have to put the h1 element inside the dom or browser.
// we have to create a root in react where we can render all react data inside it.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Phase 2
// Nested HTML tag in React.
{
  /* <div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
