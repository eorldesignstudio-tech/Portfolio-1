import { Heart, Github, Dribbble, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/_eri215_?igsh=emRlMDF5NHI4a3pz&utm_source=qr", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            ERL
          </motion.button>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {[["Work", "work"], ["About", "about"], ["Contact", "contact"]].map(([label, id]) => (
              <motion.button
                key={label}
                onClick={() => {
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {label}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground border-t border-border/50 pt-6 w-full max-w-md">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Eriberto 
            </p>
            <p className="mt-2">
              All rights reserved. Available for freelance work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}