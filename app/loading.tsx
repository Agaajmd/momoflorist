export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CDB6BD] dark:bg-[#2F3134]">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated flower icon */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#BFA2DB]/30 border-t-[#BFA2DB] rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#BFA2DB] rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-2">
            Momo Florist
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#C6BBAE] animate-pulse">
            Sedang memuat...
          </p>
        </div>
        
        {/* Animated dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#BFA2DB] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#D4C3A6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-[#BFA2DB] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}