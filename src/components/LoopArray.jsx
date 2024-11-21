import Fruit from "./Fruit";
export default function LoopArray({ person }) {
  const fruits1 = ["apple", "banana", "grapes", "papaya"];
  const fruits = [
    {
      name: "apple",
      price: 10,
      soldOut: true,
    },
    {
      name: "banana",
      price: 5,
      soldOut: false,
    },
    {
      name: "grapes",
      price: 7,
      soldOut: false,
    },
    {
      name: "papaya",
      price: 15,
      soldOut: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
      <ul>
        {fruits1.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
