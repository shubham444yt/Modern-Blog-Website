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
      <div className="relative h-[100vh] text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-70 saturate-130"
          src="/images/video/web.mp4" // Replace with your video file path 
          autoPlay
          loop
          muted
        ></video>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold leading-tight text-center"
          >
            The Future of Web Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-lg mt-4 opacity-90 text-center"
          >
            Unveiling the trends, technologies, and innovations that are shaping
            the web of tomorrow.
          </motion.p>
        </div>
      </div>

      {/* Future of Web Development Section */}
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
          Future of Web Development
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn}
        >
          <img
            src="/images/webdev.jpg"
            alt="Future of Web Development"
            className="w-3/4 sm:w-1/2 md:w-1/3 mx-auto rounded-lg shadow-lg"
          />

          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Web development is constantly evolving with advancements in AI,
              immersive technologies like AR and VR, and the rise of
              decentralized applications. As the industry grows, it is crucial
              to stay updated with trends such as responsive design, progressive
              web apps, and serverless computing. Embrace these innovations to
              create seamless, fast, and interactive user experiences.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Articles */}
      <motion.section
        className="mt-32 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Featured Articles
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Embracing AI in Development",
              description:
                "AI is transforming how websites are built. Discover the possibilities.",
              image: "/images/ai.png",
            },
            {
              title: "Web3 & Decentralized Apps",
              description:
                "How blockchain technology is changing the way we think about the web.",
              image: "/images/web3.jpg",
            },
            {
              title: "Speed Optimization Tips",
              description:
                "Improve your website's performance with these proven techniques.",
              image: "/images/webspeed.jpg",
            },
          ].map((article, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
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
        </motion.div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        className="bg-gray-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Latest Posts
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto p-6">
          {[
            {
              title: "React.js 2025: New Features to Watch",
              image: "/images/React.jpg",
            },
            {
              title: "CSS Trends You Can't Ignore",
              image: "/images/css.png",
            },
            {
              title: "Why JAMstack is the Future",
              image: "/images/jamstack.png",
            },
            {
              title: "The Rise of Serverless Computing",
              image: "/images/server.jpg",
            },
            {
              title: "How to Master Next.js",
              image: "/images/next.jpg",
            },
            {
              title: "Essential Tools for Modern Devs",
              image: "/images/dev.png",
            },
          ].map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-2">
                  Explore the latest in web development with this detailed post.
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
        </motion.div>
      </motion.section>
    </div>
  );
}
