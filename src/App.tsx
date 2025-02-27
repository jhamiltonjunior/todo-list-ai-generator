import './App.css'
import {Brain} from "lucide-react";

function App() {

  return (
    <main className={"border-gray-800 w-screen h-screen flex flex-col gap-3"}>
        <div className={"bg-[#353866] text-white p-8 shadow flex flex-row items-center justify-center gap-3"}>
            <input className={'input input-bordered py-1 w-full max-w-2xl'} type="text" placeholder="Type something..."/>
            <button
                className={'btn border-none hover:bg-[--primary-color-dark] bg-[--primary-color] tooltip tooltip-bottom'}

                data-tip="Gerar TODO List"
            >
                <Brain color={"white"} />
            </button>
        </div>

        <div className={"bg-gray-800 text-white p-4"}>
            <h1 className={"text-4xl"}>Hello, World!</h1>
            <p className={"text-lg"}>This is a React app with Tailwind CSS</p>
        </div>
    </main>
  )
}

export default App
