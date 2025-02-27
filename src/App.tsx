import './App.css'
import {Brain} from "lucide-react";
import Card from "./components/Card";

function App() {

  return (
    <main className={"bg-base-100 border-gray-800 w-screen h-screen flex flex-col gap-3"}>
        <div className={" bg-base-300 text-white p-8 shadow flex flex-row items-center justify-center gap-3"}>
            <input className={'input input-bordered py-1 w-full max-w-2xl text-black'} type="text" placeholder="Type something..."/>
            <button
                className={'btn border-none hover:bg-[--primary-color-dark] bg-[--primary-color] tooltip tooltip-bottom'}

                data-tip="Gerar TODO List"
            >
                <Brain color={"white"} />
            </button>
        </div>

        <div className={"text-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"}>
            <Card />
            <Card />
        </div>
    </main>
  )
}

export default App
