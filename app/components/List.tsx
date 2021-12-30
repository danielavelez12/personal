const listItemClassName = "text-md text-dark py-1 ml-4";

const reading = [
  "Antifragile",
  "Dictionary of Obscure Sorrows",
  "Morning Brew",
  "Strictly VC",
  "Art of Attack in Chess",
];

const listening = [
  "On the Other Side",
  "Your Undivided Attention",
  "The Twenty Minute VC",
  "Philosophize This!",
];

const using = ["Superhuman", "Cron", "Notion", "Clay"];

export const List = () => {
  return (
    <>
      <ul className="list-disc text-med py-5 border-t-2 border-t-zinc200">
        <h3 className="text-lg pb-3">
          <strong>currently reading:</strong>
        </h3>
        {reading.map((item) => (
          <li className={listItemClassName} key={item}>
            {item}
          </li>
        ))}
      </ul>

      <ul className="list-disc text-med py-5">
        <h3 className="text-lg pb-3">
          <strong>currently listening:</strong>
        </h3>
        {listening.map((item) => (
          <li className={listItemClassName} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <ul className="list-disc text-med py-5">
        <h3 className="text-lg pb-3">
          <strong>currently loving to use:</strong>
        </h3>
        {using.map((item) => (
          <li className={listItemClassName} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
