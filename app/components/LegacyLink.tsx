import dynamic from "next/dynamic";
import { NavBar } from "../components/Navbar";

interface SignLegacyProps {
  projectId: string;
  cardStyle: any;
  buttonStyle: any;
  buttonLabel: string;
  message: string;
  modalStyle?: any;
}

interface SignersListProps {
  projectId: string;
  cardStyle: any;
}

const SignLegacy = dynamic<SignLegacyProps>(
  () => import("legacy-xyz").then((legacy) => legacy.SignLegacy),
  { ssr: false }
); // Async API cannot be server-side rendered

const SignersList = dynamic<SignersListProps>(
  () => import("legacy-xyz").then((legacy) => legacy.SignersList),
  { ssr: false }
); // Async API cannot be server-side rendered

function Guestbook() {
  return (
    <>
      <div className="container mx-auto py-5 h-screen border-t-2 border-t-zinc200 bg-white">
        <h2>Guestbook</h2>
        <SignLegacy
          projectId="danielavelez"
          cardStyle={{
            backgroundColor: "#f4f4f5",
            p: 3,
            maxWidth: "500px",
            borderRadius: 5,
            marginTop: 5,
            marginBottom: 5,
            color: "#3f3f46",
          }}
          buttonStyle={{
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            height: "60px",
            backgroundColor: "#164e63",
            textTransform: "none",
            fontSize: 20,
            ":hover": { background: "#164e63", opacity: 0.8 },
          }}
          buttonLabel={"sign here"}
          message={
            "Thanks for visiting my corner of the internet! Sign here to leave your mark on the blockchain :)"
          }
        />
        <SignersList
          projectId="danielavelez"
          cardStyle={{
            backgroundColor: "#f4f4f5",
            p: 4,
            maxWidth: "500px",
            borderRadius: 5,
          }}
        />
      </div>
    </>
  );
}

export default Guestbook;
