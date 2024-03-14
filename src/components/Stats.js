export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numItemsPacked = items.reduce(
    (numItemsPacked, item) => item.packed && numItemsPacked + 1,
    0
  );
  const packCompletion = numItems && (numItemsPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {packCompletion === 100
          ? "You got everything! Ready to go✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
        ${Number(numItemsPacked)} (${packCompletion}%)`}
      </em>
    </footer>
  );
}
