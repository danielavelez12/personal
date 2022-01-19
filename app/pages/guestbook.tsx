import dynamic from 'next/dynamic'
import { NavBar } from "../components/Navbar";

const SignLegacy = dynamic(() =>
  import('legacy-xyz').then((legacy) => legacy.SignLegacy),
  { ssr: false }
) // Async API cannot be server-side rendered

const SignersList = dynamic(() =>
  import('legacy-xyz').then((legacy) => legacy.SignersList),
  { ssr: false }
) // Async API cannot be server-side rendered

function Guestbook() {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>Guestbook</h1>
        <SignLegacy projectId="legacyxyz" />
        <SignersList projectId="legacyxyz" />
      </div>
    </>
  );
}

export default Guestbook;
