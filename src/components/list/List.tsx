import React from 'react'



interface PropsType<T> {
  items: T[];
  render: (item: T) => React.ReactNode;
  filterFn?: (item: T) => boolean;
}

interface AbstractItem {
  id: React.Key | null | undefined;
}

function FilterableListView<T extends AbstractItem>(
  props: PropsType<T>,
) {
  const items = props.filterFn
    ? props.items.filter(props.filterFn)
    : props.items

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {props.render(item)}
        </li>
      ))}
    </ul>
  )
}

export default FilterableListView
