import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItem] = useState([]);

  // calculation your stats, how to not do it
  // const [numItems, setNumItems] = useState(0);

  // how to actaully do it

  // add item
  function handleAddItem(itemDetails) {
    setItem((itemsDetails) => [...itemsDetails, itemDetails]);
    // setNumItems((num) => num + 1);
  }

  // delete an item
  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  // update an item being done
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onHandleClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
