import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40
  });
    // Create add and remove functions here that changes the
    // state.
    const Change = (items,value,changeBy) => {
      if (value+changeBy < 0) {
          return;
      }
      if (items === "books") {
        setInv({ books: value+changeBy});
      } else if (items === "notebooks") {
        setInv({ notebooks: value+changeBy});
      } else if (items === "pens") {
        setInv({ pens: value+changeBy});
      }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={() => Change("books",inv.books,1)} className="circlularButton">+</button>
        <button onClick={() => Change("books",inv.books,-1)} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={() => Change("notebooks",inv.notebooks,1)}  className="circlularButton">+</button>
        <button onClick={() => Change("notebooks",inv.notebooks,-1)}  className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={() => Change("pens",inv.pens,1)}  className="circlularButton">+</button>
        <button onClick={() => Change("pens",inv.pens,-1)}  className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      
        {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};