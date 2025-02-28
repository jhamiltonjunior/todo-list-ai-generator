import './App.css'
import {Brain} from "lucide-react";
import Card from "./components/Card";
import Task from "./components/TODOList";
import TodoCardGrid, { TodoList } from './components/TodoCardGrid';
import {useState} from "react";


function App() {

    const [todoLists, setTodoLists] = useState<TodoList[]>([
        {
            id: 1,
            title: "Trabalho",
            color: "blue",
            createdAt: new Date('2025-02-20'),
            tasks: [
                { id: 101, text: "Finalizar apresentação", completed: true },
                { id: 102, text: "Responder emails", completed: false },
                { id: 103, text: "Reunião com equipe", completed: false }
            ]
        },
        {
            id: 2,
            title: "Pessoal",
            color: "green",
            createdAt: new Date('2025-02-22'),
            tasks: [
                { id: 201, text: "Comprar mantimentos", completed: false },
                { id: 202, text: "Academia", completed: true },
                { id: 203, text: "Ler livro", completed: false },
                { id: 204, text: "Ligar para os pais", completed: false }
            ]
        },
        {
            id: 3,
            title: "Aprendizado",
            color: "purple",
            createdAt: new Date('2025-02-25'),
            tasks: [
                { id: 301, text: "Estudar React", completed: true },
                { id: 302, text: "Praticar TypeScript", completed: true },
                { id: 303, text: "Aprender Next.js", completed: false }
            ]
        }
    ]);

    const [activeListId, setActiveListId] = useState<number | null>(null);

    const handleToggleTask = (listId: number, taskId: number): void => {
        setTodoLists(todoLists.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.map(task =>
                        task.id === taskId ? { ...task, completed: !task.completed } : task
                    )
                };
            }
            return list;
        }));
    };

    const handleDeleteTask = (listId: number, taskId: number): void => {
        setTodoLists(todoLists.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.filter(task => task.id !== taskId)
                };
            }
            return list;
        }));
    };

    const handleDeleteList = (listId: number): void => {
        setTodoLists(todoLists.filter(list => list.id !== listId));
    };

    const handleClickList = (listId: number): void => {
        setActiveListId(listId);
        console.log(`Lista ${listId} selecionada`);
    };

    const addNewList = () => {
        const newList: TodoList = {
            id: Date.now(),
            title: "Nova Lista",
            color: "yellow",
            createdAt: new Date(),
            tasks: []
        };
        setTodoLists([...todoLists, newList]);
    };

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

          <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Minhas Listas de Tarefas</h1>
              <button className="btn btn-primary" onClick={addNewList}>
                  Nova Lista
              </button>
          </div>

          <div className={"text-white mx-auto w-1/5 border border-gray-200 p-4 grid grid-row-1 gap-1 shadow rounded"}>
              <Task
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

          <div className={"max-w-7xl mx-auto"}>
              <h2 className={"text-left text-2xl p-4"}>Seu ultimos TODO Lists</h2>
              <TodoCardGrid
                  todoLists={todoLists}
                  onToggleTask={handleToggleTask}
                  onDeleteTask={handleDeleteTask}
                  onClickList={handleClickList}
                  onDeleteList={handleDeleteList}
              />
          </div>
      </main>
  )
}

export default App
