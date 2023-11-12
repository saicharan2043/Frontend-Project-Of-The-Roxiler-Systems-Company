import "./index.css";

const RowOfTable = (props) => {
  const { id, title, price, description, category, image, sold, dateOfSale } =
    props.eachRow;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{image}</td>
      <td>{sold}</td>
      <td>{dateOfSale}</td>
    </tr>
  );
};

export default RowOfTable;
