const listItemClassName = "list-none text-md text-dark py-1.5";
const crossedOutClassName = "list-none text-md text-light py-1.5";

const reading = ["The World for Sale (Javier Blas and Jack Farchy)"];

const finishedReading = [
  "The Remains of the Day (Kazuo Ishiguro)",
  "Klara and the Sun (Kazuo Ishiguro)",
  "A Promised Land (Barack Obama)",
  "Meditations (Marcus Aurelius)",
  "Steve Jobs (Walter Isaacson)",
  "Breakneck: China's Quest to Engineer the Future (Dan Wang)",
  "Impro: Improvisation and the Theatre (Keith Johnstone)",
  "Why We Sleep (Matthew Walker)",
  "Chip War (Chris Miller)",
  "Dune (Frank Herbert)",
  "Bad Blood (John Carreyrou)",
  "Shoe Dog (Phil Knight)",
  "Careless People (Sarah Wynn-Williams)",
  "101 Essays That Will Change The Way You Think (Brianna Wiest)",
  "Think Like a Monk (Jay Shetty)",
  "Principles for Dealing with the Changing World Order (Ray Dalio)",
  "Dark Places (Gillian Flynn)",
  "Between Sisters (Kristin Hannah)",
  "Mountains Beyond Mountains (Tracy Kidder)",
  "Dictionary of Obscure Sorrows (John Koenig)",
  "Redesigning the American Dream (Dolores Hayden)",
  "The Secret History (Donna Tartt)",
  "Walkable City (Jeff Speck)",
  "The Goldfinch (Donna Tartt)",
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
  "TBPN",
  "Morning Brew",
  "Acquired",
  "The Twenty Minute VC",
  "Philosophize This!",
];

export const List = () => {
  return (
    <>
      <div className="border-t-2 border-t-zinc200 pt-8">
        <h3 className="font-mono text-sm text-med py-0 mb-3">Currently reading</h3>
        <ul
          data-seq-scroll
          className="text-med max-h-96 overflow-y-auto border border-zinc200 p-6"
        >
          {reading.map((item) => (
            <li className={listItemClassName} key={item}>
              {item}
            </li>
          ))}
          {finishedReading.map((item) => (
            <li className={crossedOutClassName} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t-2 border-t-zinc200 pt-8">
        <h3 className="font-mono text-sm text-med py-0 mb-3">Currently listening</h3>
        <ul
          data-seq-scroll
          className="text-med max-h-96 overflow-y-auto border border-zinc200 p-6"
        >
          {listening.map((item) => (
            <li className={listItemClassName} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
