import "@styles/globals.css";

export default function AuthLayout({ children }) {
  return (
    <>
      <main className="bg-white h-screen flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
