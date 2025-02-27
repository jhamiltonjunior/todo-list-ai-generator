import './App.css'
import {Brain} from "lucide-react";
import Card from "./components/Card";
import TodoList from "./components/TODOList";

function App() {

  return (
      <main className={"bg-base-100 border-gray-800 w-screen h-screen flex flex-col gap-3"}>
          <div className={" bg-base-300 text-white p-8 shadow flex flex-row items-center justify-center gap-3"}>
              <input className={'input input-bordered py-1 w-full max-w-2xl text-black'} type="text"
                     placeholder="Type something..."/>
              <button
                  className={'btn border-none hover:bg-[--primary-color-dark] bg-[--primary-color] tooltip tooltip-bottom'}

                  data-tip="Gerar TODO List"
              >
                  <Brain color={"white"}/>
              </button>
          </div>

          <div className={"text-white mx-auto w-1/5 border border-gray-200 p-4 grid grid-row-1 gap-1 shadow rounded"}>
              <TodoList
                  tasks={[
                      {
                          id: 1,
                          text: "Teste",
                          completed: false
                      },
                        {
                            id: 2,
                            text: "Teste 2",
                            completed: true
                        },
                        {
                            id: 3,
                            text: "Teste 3",
                            completed: false
                        }
                  ]}
                  onToggleTask={(id: number) => console.log(id)}
                  onDeleteTask={(id: number) => console.log(id)}
              />
          </div>

          <div>
              <h2 className={"text-left text-2xl p-4"}>Seu ultimos TODO Lists</h2>
              <div className={"text-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"}>
                  <Card/>
                  <Card/>
              </div>
          </div>
      </main>
  )
}

export default App
