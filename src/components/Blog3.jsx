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
    <div className="bg-gray-50 text-gray-800 font-sans  ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[100vh] text-white "
      >
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-70 saturate-100"
          src="/images/video/new-food.mp4" // Replace with your video file path
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
            Healthy Breakfast Recipes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg mt-4 opacity-90 text-center"
          >
            Start your day right with quick, delicious, and nutritious healthy
            breakfast recipes that fuel your body and energize your morning!
          </motion.p>
        </div>
      </motion.div>

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
          Healthy Breakfast Recipes
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn}
        >
          <img
            src="/images/breakfast.jpg"
            alt="Future of Web Development"
            className="w-3/4 sm:w-1/2 md:w-1/3 mx-auto rounded-lg shadow-lg"
          />

          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
            In 2025, healthy breakfast recipes focus on balance, flavor, and convenience. From protein-packed smoothie bowls to overnight oats infused with superfoods, these recipes cater to busy lifestyles while prioritizing nutrition. Plant-based options, like avocado toast with microgreens or chickpea pancakes, are trending for their health benefits and sustainability. Quick meal-prep ideas, such as energy-packed breakfast wraps and nutrient-dense chia puddings, ensure you start your day on a wholesome note.
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
              title: "10 Quick & Healthy Smoothie Recipes",
              description:
                "Start your day with these refreshing and nutritious smoothies.",
              image: "/images/smoothi.jpg",
            },
            {
              title: "Overnight Oats for Busy Mornings",
              description:
                "Prepare these delicious oats the night before for a hassle-free breakfast.",
              image: "/images/oats.jpg",
            },
            {
              title: "The Art of Avocado Toast",
              description:
                "Discover creative ways to make this classic breakfast even better.",
              image: "/images/toast.jpg",
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
                title: "Berry Parfaits: Layers of Goodness",
                image: "/images/berry.png",
              },
              {
                title: "5-Minute Breakfast Burritos",
                image: "/images/burritos.jpg",
              },
              {
                title: "Chia Pudding: A Superfood Treat",
                image: "/images/chai.png",
              },
              {
                title: "Homemade Granola Bars",
                image: "/images/bar.jpg",
              },
              {
                title: "Healthy Pancake Toppings",
                image: "/images/topping.png",
              },
              {
                title: "The Perfect Scrambled Eggs",
                image: "/images/egg.jpg",
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
                    A quick and easy guide to a healthier breakfast option.
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
