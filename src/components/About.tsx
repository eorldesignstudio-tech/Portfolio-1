import { Code, Palette, Camera, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Frontend Development", level: 90 },
  { name: "Brand Design", level: 85 },
  { name: "Photography", level: 80 },
  { name: "Digital Illustration", level: 75 },
  { name: "Motion Graphics", level: 70 },
];

const services = [
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Visual Design",
    description:
      "Creating compelling visual identities, brand guidelines, and design systems that communicate effectively.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description:
      "Building responsive, fast, and user-friendly websites using modern technologies and best practices.",
  },
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    title: "Creative Photography",
    description:
      "Capturing authentic moments and creating visual stories through portrait, lifestyle, and commercial photography.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Digital Strategy",
    description:
      "Developing comprehensive digital strategies that align with business goals and enhance user engagement.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate digital creator with over 5 years
            of experience in design and development. I believe
            in the power of thoughtful design to solve problems
            and creating meaningful connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Story */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in digital creation began during my
                graphic design studies, where I discovered the
                perfect intersection of art and technology. What
                started as curiosity about how things work has
                evolved into a deep passion for crafting digital
                experiences.
              </p>
              <p>
                Each project teaches me something
                new and pushes me to explore innovative
                solutions.
              </p>
              <p>
                When I'm not designing or coding, you'll find me
                exploring new coffee shops, experimenting with
                film photography, or hiking local trails for
                inspiration. I believe the best creative work
                comes from a life well-lived.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-teal-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div>
          <motion.h3 
            className="text-2xl font-medium text-center mb-12 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="border-0 shadow-sm hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm group hover:border-teal-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
      <div hidden> 
      
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-semibold text-primary mb-2">
              50+
            </div>
            <div className="text-muted-foreground">
              Projects Completed
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-semibold text-primary mb-2">
              5+
            </div>
            <div className="text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-primary mb-2">
              30+
            </div>
            <div className="text-muted-foreground">
              Happy Clients
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-primary mb-2">
              3
            </div>
            <div className="text-muted-foreground">
              Awards Won
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}