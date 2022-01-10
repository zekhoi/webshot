import Loading from "../icon/Loading";
import { Typewriter } from "react-simple-typewriter";

export default function Browser({ src, loading, error }) {
  const welcomes = [
    "Welcome!",
    "Selamat Datang!",
    "Vitejte!",
    "добро пожаловать!",
    "Hosgeldiniz!",
  ];
  return (
    <>
      <div className="w-full max-w-2xl overflow-hidden rounded-md shadow-xl">
        <div className="flex flex-row p-3 space-x-2 overflow-hidden bg-browser-light">
          <div className="w-3 h-3 rounded-full bg-close ring-close-ring" />
          <div className="w-3 h-3 rounded-full bg-minimize ring-minimize-ring" />
          <div className="w-3 h-3 rounded-full bg-expand ring-expand-ring" />
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-48 md:h-80">
            <Loading />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48 md:h-80">
            <a className="font-mono text-xl text-gray-500 md:text-2xl">
              500 Internal Server Error
            </a>
          </div>
        ) : src ? (
          <img src={src} />
        ) : (
          <div className="flex items-center justify-center h-48 md:h-80">
            <a className="font-mono text-xl text-gray-500 cursor-default md:text-2xl">
              <Typewriter words={welcomes} loop={false} />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
