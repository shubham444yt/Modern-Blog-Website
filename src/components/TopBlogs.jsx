import { motion } from 'framer-motion';
import Link from 'next/link';

const topBlogs = [
  {
    id: 1,
    excerpt: 'The Future of Web Development.',
    category: 'Technology',
    date: 'May 15, 2025',
    image: '/images/img1.jpg',
    link: '/blog',
  },
  {
    id: 2,
    excerpt: 'Top 10 Hidden Gems in Europe.',
    category: 'Travel',
    date: 'April 28, 2025',
    image: '/images/img2.jpg',
    link: '/blog2',
  },
  {
    id: 3,
    excerpt: 'Healthy Breakfast Recipes.',
    category: 'Food',
    date: 'April 15, 2025',
    image: '/images/img3.jpg',
    link: '/blog3',
  },
];

const TopBlogs = () => {
  return (
    <section id="blogs" className="py-10 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Top Blogs</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Check out our most popular and recent blog posts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={blog.link}>
                <img
                  src={blog.image}
                  alt={blog.excerpt}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 text-lg font-semibold mb-2">{blog.excerpt}</h3>
                <p className="text-indigo-600 text-sm font-semibold">{blog.category} · {blog.date}</p>
                <Link
                  href={blog.link}
                  className="mt-4 inline-block bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          {/* <Link 
            href="/blog"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            View All Blogs
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default TopBlogs;
