import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onCancelItem, onToggleItem, onClear }) {
  const [sortMode, setSortMode] = useState("input");

  let sortedItems;

  if (sortMode === "input") sortedItems = items;
  if (sortMode === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortMode === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list-menu">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onCancelItem={onCancelItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortMode(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
