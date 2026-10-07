import { ArrowDown, Github, Dribbble, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import abstractImage from 'figma:asset/bebc52c76f79064269e882894c63bcc926d3731b.png';
import { motion } from "framer-motion";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-medium tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
              
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I craft meaningful digital experiences through thoughtful design, 
                creative storytelling, and innovative visual solutions.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" onClick={scrollToWork} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
             
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
             
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract Art Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl isolate overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">
                <motion.img
                  src={abstractImage}
                  alt="Abstract 3D Art"
                  className="w-full h-full object-cover will-change-transform"
                  animate={{
                    scale: [1.06, 1.1, 1.06],
                    x: [0, -4, 0],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl -z-10 transform scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}