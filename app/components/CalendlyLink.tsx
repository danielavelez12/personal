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
    date: new Date(Date.now() + 86400000),
  };

  const utm = {};

  const url = "https://calendly.com/danielavelez/chat";

  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <button onClick={onClick} className="py-2 w-fit">
      <p className="text-md text-med hover:text-blue hover:underline">
        ☕️ Grab a time to say hi!
      </p>
    </button>
  );
};
