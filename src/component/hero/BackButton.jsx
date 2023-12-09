const BackButton =() =>{
    return (
        <button
        type="button"
        className="w-full flex items-center justify-center px-3 py-2 text-sm text-gray-700 transition-colors duration-200 bg-gray-100 border-2 rounded-lg gap-x-2 sm:w-auto hover:bg-gray-200"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </button>
      
    )
  }

export default BackButton;