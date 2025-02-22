import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-around flex-wrap gap-8">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold text-white mb-4">LegalAIze</h3>
            <p className="text-white mb-6 max-w-sm">
              Simplifying legal contract analysis with AI. Because we cannot all
              be lawyers.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-center text-white/70 text-sm">
              © {new Date().getFullYear()} LegalAize. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
