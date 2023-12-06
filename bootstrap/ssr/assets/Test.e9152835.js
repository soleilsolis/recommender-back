import { useState } from "react";
import { a as jsxs, F as Fragment, j as jsx } from "../ssr.js";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "ziggy-js";
import "react/jsx-runtime";
let nextId = 0;
function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Inspiring sculptors:"
    }), /* @__PURE__ */ jsx("input", {
      value: name,
      onChange: (e) => setName(e.target.value)
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => {
        artists.push({
          id: nextId++,
          name
        });
      },
      children: "Add"
    }), /* @__PURE__ */ jsx("ul", {
      children: artists.map((artist) => /* @__PURE__ */ jsx("li", {
        children: artist.name
      }, artist.id))
    })]
  });
}
export {
  List as default
};
