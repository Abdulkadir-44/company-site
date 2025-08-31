const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-950 to-blue-900">
            <div className="w-16 h-16 border-4 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
        </div>
    );
};

export default LoadingScreen;