type SectionDividerProps = {
    text: string;
    className?: string;
  };
  
  const SectionDivider = ({ text, className = '' }: SectionDividerProps) => {
    return (
      <div className={`flex items-center justify-center gap-4 w-full ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
        {text && (
          <span className="text-sm font-medium text-gray-500">
            {text}
          </span>
        )}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
      </div>
    );
  };
  
  export default SectionDivider;
