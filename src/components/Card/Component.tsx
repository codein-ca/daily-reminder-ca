import React from "react";
import { Card } from "../../types/state";
import Button from "../Button";
export const Component = ({ state }: { state: Card }) => {
  return (
    <article key={state.id} className="App-passage">
      <span className="content">{state.content}</span>
      <aside className="card-options">
        <Button emoji="📌" ariaLabel="Emoji of pin" />
        <Button emoji="✅" ariaLabel="Emoji of checkmark" />
        <Button emoji="🚧" ariaLabel="Emoji of construction sign" />
        <hr />
        <Button emoji="🚮" ariaLabel="Emoji of trash can" />
      </aside>
    </article>
  );
};
