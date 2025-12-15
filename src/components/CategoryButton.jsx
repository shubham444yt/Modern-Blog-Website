import { motion } from 'framer-motion';

const CategoryButton = ({ category, active, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
        active
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
      }`}
    >
      {category}
    </motion.button>
  );
};

export default CategoryButton;