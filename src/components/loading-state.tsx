export function LoadingState() {
    return (
        <div className="min-h-screen bg-gray-50 animate-in fade-in duration-500">
            <div className="bg-blue-600 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Name skeleton */}
                        <div className="w-64 h-12 bg-blue-500/50 rounded-lg m-8 animate-pulse" />

                        {/* Nav skeleton */}
                        <div className="flex gap-4 py-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 bg-white/20 rounded-lg animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
                {/* Content sections skeleton */}
                {[1, 2, 3].map((section) => (
                    <div key={section} className="space-y-4">
                        <div className="w-48 h-8 bg-gray-200 rounded-lg animate-pulse" />
                        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                            <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse" />
                            <div className="w-3/4 h-4 bg-gray-100 rounded animate-pulse" />
                            <div className="w-1/2 h-4 bg-gray-100 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

