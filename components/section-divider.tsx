// type SectionDividerProps = {
//     text: string;
//     className?: string;
//   };
  
//   const SectionDivider = ({ text, className = '' }: SectionDividerProps) => {
//     return (
//       <div className={`flex items-center justify-center gap-4 w-full ${className}`}>
//         <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
//         {text && (
//           <span className="text-sm font-medium text-gray-500">
//             {text}
//           </span>
//         )}
//         <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
//       </div>
//     );
//   };
  
//   export default SectionDivider;
// ----------------------------  
// import React from 'react';

// type AnimatedSectionHeaderProps = {
//   title: string;
//   subtitle?: string;
//   className?: string;
// };

// const AnimatedSectionHeader = ({ 
//   title, 
//   subtitle, 
//   className = '' 
// }: AnimatedSectionHeaderProps) => {
//   return (
//     <div className={`mx-auto max-w-3xl pt-4 ${className}`}>
//       <h2 className="text-center animate-[gradient_6s_linear_infinite] 
//                      bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.gray.500),theme(colors.gray.900))] 
//                      bg-[length:200%_auto] bg-clip-text pb-4 pt-4 
//                      font-nacelle text-transparent text-3xl font-semibold md:text-4xl">
//         {title}
//       </h2>
//       {/* Section Divider */}
//       <div className="flex items-center justify-center gap-4 w-full mt-2">
//         <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
//         {subtitle && (
//           <span className="text-sm font-medium text-gray-500">
//             {subtitle}
//           </span>
//         )}
//         <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent flex-grow" />
//       </div>
//     </div>
//   );
// };

// export default AnimatedSectionHeader;

//----------------------------
import React from 'react';

type AnimatedSectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const AnimatedSectionHeader = ({ 
  title, 
  subtitle, 
  className = '' 
}: AnimatedSectionHeaderProps) => {
  return (
    <div className={`mx-auto max-w-3xl pt-4 ${className}`}>
      <div className="relative">
        {/* Gradient Lines Container */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400/50 to-gray-400/50 flex-grow" />
            <div className="invisible">{title}</div> {/* Invisible spacer with same width as title */}
            <div className="h-px bg-gradient-to-l from-transparent via-gray-400/50 to-gray-400/50 flex-grow" />
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-center animate-[gradient_6s_linear_infinite] 
                     bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.gray.500),theme(colors.gray.900))] 
                     bg-[length:200%_auto] bg-clip-text pb-4 pt-4 
                     font-nacelle text-transparent text-3xl font-semibold md:text-4xl
                     relative z-10">
          {title}
        </h2>
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <div className="text-center mt-2">
          <span className="text-sm font-medium text-gray-500">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
export default AnimatedSectionHeader;

// Usage example:
const Example = () => {
  return (
    <AnimatedSectionHeader 
      title="経歴" 
      subtitle="Timeline"  // Optional
      className="mb-8"    // Optional additional classes
    />
  );
};