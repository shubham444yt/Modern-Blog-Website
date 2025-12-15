import { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryButton from './CategoryButton';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Technology', image: '/images/cat1.jpg' },
  { name: 'Travel', image: '/images/cat2.jpg' },
  { name: 'Food', image: '/images/cat3.jpg' },
  { name: 'Lifestyle', image: '/images/cat4.jpg' },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="categories" className="py-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800">
            Categories
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Explore a variety of blog topics and find what inspires you.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', ...categories.map((c) => c.name)].map((category) => (
            <CategoryButton
              key={category}
              category={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className="transition transform hover:scale-105"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories
            .filter((c) => activeCategory === 'All' || c.name === activeCategory)
            .map(({ name, image }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden h-40">
                  <Image
                    src={image}
                    height={160}
                    width={160}
                    alt={name}
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Explore {name} blogs</p>
                  <Link
                    href="https://www.google.com"
                    className="text-indigo-500 hover:text-indigo-700 text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
