import { createTask } from '@/app/lib/actions'

export default function AddTaskButton({
  id,
  onTaskCreated,
}: {
  id: string
  onTaskCreated: (taskId: string) => void
}) {
  const handleAddTask = async () => {
    const newTask_id = await createTask(id)
    if (newTask_id) {
      onTaskCreated(newTask_id)
    }
  }
  return (
    <button
      onClick={handleAddTask}
      onPointerDown={e => e.stopPropagation()}
      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-indigo-300 px-3 py-2 text-neutral-400 transition-all duration-200 hover:scale-[1.02] hover:border-indigo-500 hover:text-indigo-400 dark:border-neutral-700">
      <span className="material-symbols-outlined animate-pulse">
        add_circle
      </span>
      할일 추가
    </button>
  )
}
