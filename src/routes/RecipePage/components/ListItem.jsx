/* eslint-disable react/prop-types */
function ListItem({ boldText, text }) {
    return (
        <li className="my-3">
            <span className="font-bold">{boldText}</span>
            {text}
        </li>
    );
}

export default ListItem;
