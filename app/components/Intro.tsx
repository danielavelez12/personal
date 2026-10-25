export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <p className="text-lg text-med">
        {"I started my career in NYC as one of the 3-5 engineers at "}
        <a
          className="text-blue hover:underline"
          href="https://techcrunch.com/2023/09/13/alza-emerges-from-stealth-to-offer-affordable-and-inclusive-financial-tools-to-immigrants/"
          target="_blank"
          rel="noreferrer"
        >
          Alza
        </a>
        {", building a neobank for Latin Americans. Now, I'm helping build "}
        <a
          className="text-blue hover:underline"
          href="https://decade.com"
          target="_blank"
          rel="noreferrer"
        >
          Decade
        </a>
        {
          " in São Paulo, alongside some of the folks who built Nubank. Prior to joining Decade, I built in AI and healthcare at "
        }
        <a
          className="text-blue hover:underline"
          href="https://forus.com"
          target="_blank"
          rel="noreferrer"
        >
          Forus
        </a>
        {", helping people access medications more easily. "}
        <br />
        <br />
        {"I studied CS at MIT while building "}
        <a
          className="text-blue hover:underline"
          href="https://github.com/danielavelez1201"
          target="_blank"
          rel="noreferrer"
        >
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
        {". In my free time I'm enjoying "}
        <a
          className="text-blue hover:underline"
          href="https://www.youtube.com/playlist?list=PLvojtUttuv1ztZxn3VPJ2sffPQJWkI8Pw"
          target="_blank"
          rel="noreferrer"
        >
          playing piano
        </a>
        {" and tennis, reading, and learning Portuguese while settling into São Paulo."}
      </p>
    </div>
  );
};
