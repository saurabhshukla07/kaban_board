import { useState } from 'react';
import {
  DndContext,
 
  DragOverlay,
  
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

  import type{
   DragEndEvent,
   DragStartEvent, } 
   from '@dnd-kit/core';


import type { Task, TaskStatus } from '../types';
import { useTasks } from '../hooks/useTasks';
import { COLUMNS } from '../utils/constants';
import Column from '../components/Column';
import TaskCard from '../components/TaskCard';
import AddTaskModal from '../components/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import Loader from '../components/Loader';

const Board = () => {
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>('todo');

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t._id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    const task = tasks.find((t) => t._id === taskId);
    if (task && task.status !== newStatus) {
      updateTask(taskId, { status: newStatus });
    }
  };

  const handleAddTask = (status: TaskStatus) => {
    setDefaultStatus(status);
    setIsAddModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleDeleteTask = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(id);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLUMNS.map((column) => {
              const columnTasks = tasks.filter((task) => task.status === column.id);
              return (
                <Column
                  key={column.id}
                  id={column.id}
                  title={column.title}
                  color={column.color}
                  tasks={columnTasks}
                  onAddTask={handleAddTask}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                />
              );
            })}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="rotate-3 scale-105">
                <TaskCard
                  task={activeTask}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

<AddTaskModal
  isOpen={isAddModalOpen}
  onClose={() => setIsAddModalOpen(false)}
  onAdd={async (data) => { 
    await createTask(data); 
  }}
  defaultStatus={defaultStatus}
/>


<EditTaskModal
  isOpen={isEditModalOpen}
  onClose={() => setIsEditModalOpen(false)}
  onUpdate={async (id, data) => {
    await updateTask(id, data);   // ignore the returned Task
  }}
  task={selectedTask}
/>


    </>
  );
};

export default Board;