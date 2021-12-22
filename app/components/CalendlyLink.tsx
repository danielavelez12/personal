import Link from "next/link";
import Script from "next/script";
import { openPopupWidget } from "react-calendly";

export const CalendlyLink = () => {
  const pageSettings = {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055",
  };

  const prefill = {
    email: "test@test.com",
    firstName: "Jon",
    lastName: "Snow",
    name: "Jon Snow",
    guests: ["janedoe@example.com", "johndoe@example.com"],
    customAnswers: {
      a1: "a1",
      a2: "a2",
      a3: "a3",
      a4: "a4",
      a5: "a5",
      a6: "a6",
      a7: "a7",
      a8: "a8",
      a9: "a9",
      a10: "a10",
    },
    date: new Date(Date.now() + 86400000),
  };

  const utm = {
    utmCampaign: "Spring Sale 2019",
    utmContent: "Shoe and Shirts",
    utmMedium: "Ad",
    utmSource: "Facebook",
    utmTerm: "Spring",
  };

  const url = "https://calendly.com/danielavelez";

  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <button onClick={onClick} className="py-2 w-fit">
      <p className="text-md text-med hover:text-blue hover:underline">
        ☕️ Grab a time on my calendar to say hi!
      </p>
    </button>
  );
};
