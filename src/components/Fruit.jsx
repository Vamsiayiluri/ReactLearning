function Fruit({ fruit }) {
  return (
    <div>
      {/* <div>
        <h1>Fruits Price {">"} 5</h1>
        {fruit.price > 5 ? (
          <h1>
            {fruit.name} {fruit.price}
          </h1>
        ) : (
          ""
        )}
      </div> */}
      <div>
        <h1>
          {fruit.name} {fruit.price} {fruit.soldOut ? "Sold out " : ""}
        </h1>
      </div>
    </div>
  );
}

export default Fruit;
