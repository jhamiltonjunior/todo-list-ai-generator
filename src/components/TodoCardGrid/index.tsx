import React from 'react';
import TodoCheckbox, { Task } from '../TODOList';

// Interface para uma lista de tarefas completa
export interface TodoList {
    id: number;
    title: string;
    tasks: Task[];
    color?: string; // Cor opcional do card, similar ao Google Keep
    createdAt: Date;
}

interface TodoCardGridProps {
    todoLists: TodoList[];
    onToggleTask: (listId: number, taskId: number) => void;
    onDeleteTask?: (listId: number, taskId: number) => void;
    onClickList?: (listId: number) => void;
    onDeleteList?: (listId: number) => void;
}

const TodoCardGrid: React.FC<TodoCardGridProps> = ({
                                                       todoLists,
                                                       onToggleTask,
                                                       onDeleteTask,
                                                       onClickList,
                                                       onDeleteList
                                                   }) => {
    // Função para formatar a data
    const formatDate = (date: Date): string => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    // Determinar a cor de fundo do card
    const getCardColor = (color?: string): string => {
        switch (color) {
            case 'red': return 'bg-red-100';
            case 'green': return 'bg-green-100';
            case 'blue': return 'bg-blue-100';
            case 'yellow': return 'bg-yellow-100';
            case 'purple': return 'bg-purple-100';
            case 'pink': return 'bg-pink-100';
            default: return 'bg-gray-50';
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todoLists.length === 0 ? (
                <div className="col-span-full text-center py-10">
                    <p className="text-gray-500">Nenhuma lista de tarefas encontrada</p>
                </div>
            ) : (
                todoLists.map((list) => (
                    <div
                        key={list.id}
                        className={`card ${getCardColor(list.color)} shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer`}
                        onClick={() => onClickList && onClickList(list.id)}
                    >
                        <div className="card-body p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="card-title text-lg font-medium">{list.title}</h2>
                                {onDeleteList && (
                                    <button
                                        className="btn btn-ghost btn-xs rounded-full"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDeleteList(list.id);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            <div className="max-h-60 overflow-y-auto">
                                <TodoCheckbox
                                    tasks={list.tasks}
                                    onToggleTask={(taskId) => onToggleTask(list.id, taskId)}
                                    onDeleteTask={onDeleteTask ? (taskId) => onDeleteTask(list.id, taskId) : undefined}
                                />
                            </div>

                            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                                <span>{formatDate(list.createdAt)}</span>
                                <span>{list.tasks.filter(task => task.completed).length}/{list.tasks.length} concluídas</span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoCardGrid;