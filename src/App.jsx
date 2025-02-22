import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div
      className="app bg-black min-h-screen text-center break-words px-5 pt-10 flex flex-col gap-10
    items-center justify-center text-black text-2xl select-none"
    >
      <h1 className="heading text-4xl sm:text-5xl px-2 font-one font-semibold text-gold">
        Pomodoro Clock
      </h1>
      <Pomodoro />
    </div>
  );
}

export default App;
