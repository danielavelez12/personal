export const Intro = () => {
  return (
    <>
      <p className="text-lg text-med">
        {"I'm currently studying CS at MIT, working on "}
        <a
          className="text-blue hover:underline"
          href="https://github.com/danielavelez1201"
          target="_blank"
          rel="noreferrer"
        >
          tech side projects
        </a>
        , 
        supporting student founders at{" "}
        <a
          className="text-blue hover:underline"
          href="https://www.pear.vc/"
          target="_blank"
          rel="noreferrer"
        >
          Pear VC
        </a>
        , and{" "}
        <a
          className="text-blue hover:underline"
          href="https://www.youtube.com/playlist?list=PLvojtUttuv1ztZxn3VPJ2sffPQJWkI8Pw"
          target="_blank"
          rel="noreferrer"
        >
          playing piano
        </a>{" "}
        on campus.
      </p>
    </>
  );
};
