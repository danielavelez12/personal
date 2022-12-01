const listItemClassName = "text-md text-dark py-1 ml-4";
const crossedOutClassName = "text-md text-light py-1 ml-4";

const reading = [
  "Cloud Cuckoo Land",
  "A Room of One's Own",
  "The Death and Life of Great American Cities",
  "Art of Attack in Chess",
  "Dictionary of Obscure Sorrows",
  "Morning Brew",
  "Strictly VC",
];

const finishedReading = [
  "Zen and the Art of Motorcycle Maintenance",
  "Uncanny Valley",
  "Sputnik Sweetheart",
  "One Hundred Years of Solitude",
  "Sapiens",
  "All the Light We Cannot See",
  "Norwegian Wood",
  "Zero to One",
  "The Goal: A Process of Ongoing Improvement",
  "Antifragile",
  "Crying in H-Mart",
  "Goodbye, Again",
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
        {finishedReading.map((item) => (
          <li className={crossedOutClassName} key={item}>
            {item} ✔
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
