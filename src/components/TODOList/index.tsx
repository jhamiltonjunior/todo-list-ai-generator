import React from 'react';

// Definição dos tipos
export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoCheckboxProps {
    tasks: Task[];
    onToggleTask: (id: number) => void;
    onDeleteTask?: (id: number) => void; // Opcional, caso não queira permitir exclusão
}

const TodoCheckbox: React.FC<TodoCheckboxProps> = ({
                                                       tasks,
                                                       onToggleTask,
                                                       onDeleteTask
                                                   }) => {
    return (
        <div className="w-full">
            {tasks.length === 0 ? (
                <div className="alert">
                    <span>Nenhuma tarefa disponível.</span>
                </div>
            ) : (
                <ul className="w-full">
                    {tasks.map((task: Task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center p-3 border-b mt-2"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={task.completed}
                                    onChange={() => onToggleTask(task.id)}
                                />
                                <span className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </span>
                            </div>
                            {onDeleteTask && (
                                <button
                                    className="btn btn-error btn-sm"
                                    onClick={() => onDeleteTask(task.id)}
                                >
                                    Excluir
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoCheckbox;