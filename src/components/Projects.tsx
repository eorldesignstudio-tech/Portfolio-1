"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

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
              <a
                href={`${import.meta.env.BASE_URL}#/projects/${project.slug}`}
                aria-label={`View ${project.title} project details`}
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              >
                <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
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
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
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