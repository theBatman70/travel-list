import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleCancelItem(itemToCancelId) {
    setItems((items) => items.filter((item) => item.id !== itemToCancelId));
  }

  function handleTogglePacked(itemToToggleId) {
    setItems((items) =>
      items.map((item) =>
        itemToToggleId === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Do you want to clear out all the items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onCancelItem={handleCancelItem}
        onToggleItem={handleTogglePacked}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
