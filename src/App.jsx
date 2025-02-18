import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div
      className="app bg-black min-h-screen text-center break-words px-5 flex flex-col gap-10 
    items-center justify-center font-one font-semibold text-black"
    >
      <h1 className="heading text-3xl px-2 text-gold">Pomodoro Clock</h1>
      <Pomodoro />
    </div>
  );
}

export default App;
