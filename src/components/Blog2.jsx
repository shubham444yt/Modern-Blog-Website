import { motion } from "framer-motion";

export default function BlogPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[100vh] text-white "
      >
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-80 saturate-100"
          src="/images/video/europ.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-bold leading-tight text-center"
          >
            Top 10 Hidden Gems in Europe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg mt-4 opacity-90 text-center"
          >
            Uncover the charm of Europe's best-kept secrets with our guide to
            the Top 10 Hidden Gems—where history, beauty, and adventure await!
          </motion.p>
        </div>
      </motion.div>

      {/* Top 10 Hidden Gems in Europe */}
      <motion.section
        className="mt-16 max-w-6xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          variants={fadeIn}
        >
          Top 10 Hidden Gems in Europe
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn}
        >
          <img
            src="/images/hidden.jpg"
            alt="Future of Web Development"
            className="w-3/4 sm:w-1/2 md:w-1/3 mx-auto rounded-lg shadow-lg"
          />

          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
            Discover Europe beyond the usual tourist hotspots with our list of the "Top 10 Hidden Gems in Europe" for 2025. From the serene beauty of Hallstatt in Austria to the unspoiled beaches of Sardinia, Italy, these destinations offer unique experiences and rich cultural heritage. Explore charming medieval towns, breathtaking natural wonders, and offbeat adventures that promise tranquility and awe. Perfect for travelers seeking something extraordinary and off the beaten path!
            </p>
          </div>
        </motion.div>
      </motion.section>


      {/* Featured Articles */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-32 max-w-6xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Articles
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Exploring Hallstatt, Austria",
              description:
                "Discover the picturesque beauty of this charming lakeside village.",
              image: "/images/hall.jpg",
            },
            {
              title: "Secrets of Český Krumlov, Czech Republic",
              description:
                "A journey through the medieval streets of this hidden gem.",
              image: "/images/ceskyy.jpg",
            },
            {
              title: "The Magic of Sintra, Portugal",
              description:
                "Unveil the fairytale palaces and gardens in this enchanting town.",
              image: "/images/portugal.jpg",
            },
          ].map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform"
            >
              <img
                src={article.image}
                alt={article.title}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-100 py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Latest Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "The Hidden Gems of Giethoorn, Netherlands",
                image: "/images/gems.jpg",
              },
              {
                title: "Ronda, Spain: The Cliffside Marvel",
                image: "/images/ronda.jpg",
              },
              {
                title: "The Tranquility of Gimmelwald, Switzerland",
                image: "/images/gimm.jpg",
              },
              {
                title: "Lofoten Islands, Norway: A Nordic Paradise",
                image: "/images/lofoten.png",
              },
              {
                title: "Ravishing Rovinj, Croatia",
                image: "/images/ravi.jpg",
              },
              {
                title: "Kotor Bay, Montenegro: A Coastal Beauty",
                image: "/images/kotor.jpg",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600 mt-2">
                    A detailed guide to one of Europe's most beautiful hidden gems.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
