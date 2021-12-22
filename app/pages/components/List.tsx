const listItemClassName = "text-md text-dark py-1";

export const List = () => {
  return (
    <>
      <ul className="list-disc py-8 mx-5 border-x-zinc200 divide-zinc200 ">
        <li className={listItemClassName}>Hello</li>
        <li className={listItemClassName}>Hi</li>
      </ul>
    </>
  );
};
