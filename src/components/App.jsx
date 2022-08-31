import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(entr) {
  return (
    <Entry
      name={entr.name}
      key={entr.id}
      emj={entr.emoji}
      mean={entr.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
