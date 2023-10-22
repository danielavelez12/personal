const listItemClassName = "text-md text-dark py-1 ml-4";
const crossedOutClassName = "text-md text-light py-1 ml-4";

const reading = [
  "Art of Attack in Chess (Vladimir Vuković)",
  "Dictionary of Obscure Sorrows (John Koenig)",
  "Morning Brew",
];

const finishedReading = [
  "The Sense of Style: The Thinking Person's Guide to Writing in the 21st Century (Steven Pinker)",
  "Song of Achilles (Madeline Miller)",
  "The Elephant Vanishes (Haruki Murakami)",
  "The Lincoln Highway (Amor Towles)",
  "How to Win Friends and Influence People (Dale Carnegie)",
  "Atomic Habits (James Clear)",
  "The Three-Body Problem (Liu Cixin)",
  "A Room of One's Own (Virginia Woolf)",
  "The Death and Life of Great American Cities (Jane Jacobs)",
  "On Palestine (Noam Chomsky and Ilan Pappé)",
  "A Gentleman in Moscow (Amor Towles)",
  "Cloud Cuckoo Land (Anthony Doerr)",
  "Zen and the Art of Motorcycle Maintenance (Robert M. Pirsig)",
  "Uncanny Valley (Anna Wiener)",
  "Sputnik Sweetheart (Haruki Murakami)",
  "One Hundred Years of Solitude (Gabriel García Márquez)",
  "Sapiens: A Brief History of Humankind (Yuval Noah Harari)",
  "All the Light We Cannot See (Anthony Doerr)",
  "Norwegian Wood (Haruki Murakami)",
  "Zero to One: Notes on Startups, or How to Build the Future (Peter Thiel with Blake Masters)",
  "The Goal: A Process of Ongoing Improvement (Eliyahu M. Goldratt and Jeff Cox)",
  "Antifragile: Things That Gain from Disorder (Nassim Nicholas Taleb)",
  "Crying in H-Mart (Michelle Zauner)",
  "Goodbye, Again (Jonny Sun)",
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
