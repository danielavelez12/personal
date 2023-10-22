export const Intro = () => {
  return (
    <>
      <p className="text-lg text-med">
        {"I'm currently a software engineer at "}
        <a
          className="text-blue hover:underline"
          href="https://alza.app/"
          target="_blank"
          rel="noreferrer"
        >
          Alza
        </a>
        {", building financial services for Latin Americans living in the US. Before joining Alza, I studied CS at MIT while building "}
        <a 
          className="text-blue hover:underline"
          href="https://github.com/danielavelez1201"
          target="_blank"
          rel="noreferrer">
            side projects
          </a>
          {" and supporting student founders on campus through "}
        <a
          className="text-blue hover:underline"
          href="https://www.pear.vc/"
          target="_blank"
          rel="noreferrer"
        >
          Pear VC
        </a>
        {" and "}
        <a
          className="text-blue hover:underline"
          href="https://startup.mit.edu/"
          target="_blank"
          rel="noreferrer"
        >
          StartLabs
        </a>
        {". In my free time I enjoy "}
        <a
          className="text-blue hover:underline"
          href="https://www.youtube.com/playlist?list=PLvojtUttuv1ztZxn3VPJ2sffPQJWkI8Pw"
          target="_blank"
          rel="noreferrer"
        >
          playing piano
        </a>{", reading, and exploring NYC with friends :)"}
        </p>
    </>
  );
};
