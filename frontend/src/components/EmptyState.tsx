import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = 'No tasks yet' }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-4">
        <Inbox className="w-12 h-12 text-gray-400 dark:text-gray-500" />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
        {message}
      </p>
      <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
        Add your first task to get started
      </p>
    </div>
  );
};

export default EmptyState;