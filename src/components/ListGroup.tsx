
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface ListGroupProps{
  items : string[];
  heading: string;

}

function ListGroup({items, heading}: ListGroupProps) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  


  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
