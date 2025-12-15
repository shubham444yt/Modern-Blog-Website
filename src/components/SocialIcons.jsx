import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SocialIcons = () => {
  const socialLinks = [
    { icon: <FiFacebook size={14} />, name: 'Facebook' },
    { icon: <FiTwitter size={14} />, name: 'Twitter' },
    { icon: <FiInstagram size={14} />, name: 'Instagram' },
    { icon: <FiLinkedin size={14} />, name: 'LinkedIn' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="#"
          className=" p-3 bg-blue-500 text-white rounded-full transition duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;