const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--background)_/_0.8)] backdrop-blur-sm">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-[hsl(var(--primary)_/_0.2)] border-t-[hsl(var(--primary))] animate-spin" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
