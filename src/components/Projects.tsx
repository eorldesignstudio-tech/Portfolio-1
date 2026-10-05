"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";


interface Project {
  id: number; 
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dulce Encuentro Coffee Shop Website",
    description:
      "A modern, responsive platform built for a local coffee shop.",
    category: "Web Design",
    image: "/images/project-coffee.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Sustainable Living Brand",
    description:
      "Complete brand identity design for an eco-friendly lifestyle company, including logo, color palette, typography, and brand guidelines.",
    category: "Brand Identity",
    image: "/images/project-sustainable.svg",
    tags: [
      "Logo Design",
      "Brand Guidelines",
      "Adobe Creative Suite",
    ],
  },
  {
    id: 3,
    title: "App",
    description:
      "Mobile app design for fitness enthusiasts with workout tracking, progress analytics, and social features. Focused on intuitive UX and motivating design.",
    category: "App",
    image: "/images/project-fitness.svg",
    tags: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "User Research",
    ],
  },
  {
    id: 4,
    title: "3D Product Visualization",
    description:
      "High-quality 3D renders and animations for product showcases, featuring photorealistic materials, lighting, and dynamic camera movements.",
    category: "3D Design",
    image: "/images/project-product.svg",
    tags: [
      "Blender",
      "Cinema 4D",
      "Rendering",
      "Animation",
    ],
  },
  {
    id: 5,
    title: "Website",
    description:
      "A modern, responsive platform built for a lifestyle brand website concept.",
    category: "Web Design",
    image: "/images/project-website.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Streetwear Branding",
    description:
      "A contemporary brand direction for a streetwear label with expressive typography and elevated retail visuals.",
    category: "Brand Identity",
    image: "/images/project-streetwear.svg",
    tags: ["Brand Strategy", "Typography", "Packaging", "Art Direction"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Hot Chicken Branding",
    description:
      "A bold identity system for a neighborhood restaurant concept that blends heat, personality, and craft.",
    category: "Brand Identity",
    image: "/images/project-hotchicken.svg",
    tags: ["Brand Identity", "Illustration", "Menu Design", "Campaign"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = [
  "All",
  "Web Design",
  "Brand Identity",
  "App",
  "3D Design",
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section id="work" className="py-24 px-4 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion
            for creating meaningful and impactful digital
            experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                activeCategory === category
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 overflow-hidden rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-3">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-orange-500 to-rose-500 text-white"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-orange-200 hover:border-rose-300 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}