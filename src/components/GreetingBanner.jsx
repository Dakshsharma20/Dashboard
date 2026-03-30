export default function GreetingBanner() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    rounded-2xl p-4 sm:p-6 text-white overflow-hidden gap-4">

    
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

    
      <div className="relative z-10 text-center sm:text-left">

        <h1 className="text-lg sm:text-2xl font-bold">
          Hello, Daksh 👋
        </h1>

        <p className="text-xs sm:text-sm opacity-90 mt-1">
          Here’s what’s happening with your dashboard today
        </p>

        <button className="mt-3 sm:mt-4 bg-white text-indigo-600 px-4 py-2 rounded-xl text-xs sm:text-sm hover:scale-105 transition">
          Explore
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        className="w-24 sm:w-36 rounded-xl shadow-lg object-cover"
      />

    </div>
  );
}