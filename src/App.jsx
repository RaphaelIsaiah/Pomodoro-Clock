import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div className="app bg-slate-300 min-h-screen text-center break-words px-5 flex flex-col gap-10 items-center justify-center font-one font-semibold">
      <h1 className="heading t-shadow text-3xl px-2">Pomodoro Clock</h1>
      <Pomodoro />
    </div>
  );
}

export default App;
