import { MaterialItem } from "./Materialtem";

export const MaterialsList = ({ items, ...otherProps}) => {
    return (
    <ul>
        {items.map(item => 
            <li key={item.id}>
                <MaterialItem item={item} {...otherProps}  />
            </li>
            )}
    </ul>
    )
}; 