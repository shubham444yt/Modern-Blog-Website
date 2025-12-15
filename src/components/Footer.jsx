import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'Blogs', 'Categories', 'Gallery', 'Contact'],
    },
    {
      title: 'Categories',
      links: ['Technology', 'Travel', 'Food', 'Lifestyle', 'Health'],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              NextBlog
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Bringing you the best content on technology, travel, food, and more. Stay updated with our latest articles.
            </p>
            <div className="pt-2">
              <SocialIcons />
            </div>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href="#" 
                      className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg"
                aria-label="Subscribe"
              >
                <FiSend className="text-white" />
              </motion.button>
            </div>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} NextBlog. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="#" className="hover:text-indigo-300 transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;