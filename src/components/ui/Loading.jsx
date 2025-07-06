import { motion } from 'framer-motion';

const Loading = ({ type = 'page' }) => {
  if (type === 'page') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header skeleton */}
        <div className="bg-white border-b border-gray-100 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-200 rounded shimmer"></div>
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-16 bg-gray-200 rounded shimmer"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero skeleton */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="h-12 w-96 bg-white/20 rounded mx-auto mb-6 shimmer"></div>
            <div className="h-6 w-128 bg-white/20 rounded mx-auto mb-8 shimmer"></div>
            <div className="h-12 w-40 bg-white/20 rounded mx-auto shimmer"></div>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4 shimmer"></div>
                <div className="h-6 w-32 bg-gray-200 rounded mb-3 shimmer"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded shimmer"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded shimmer"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cards') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4 shimmer"></div>
            <div className="h-6 w-32 bg-gray-200 rounded mb-3 shimmer"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded shimmer"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loading;