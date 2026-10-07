export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "dulce-encuentro-coffee-shop",
    title: "Dulce Encuentro Coffee Shop Website",
    description:
      "A modern, responsive platform built for a local coffee shop.",
    category: "Web Design",
    image: `${import.meta.env.BASE_URL}images/project-coffee.svg`,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    slug: "sustainable-living-brand",
    title: "Sustainable Living Brand",
    description:
      "Complete brand identity design for an eco-friendly lifestyle company, including logo, color palette, typography, and brand guidelines.",
    category: "Brand Identity",
    image: `${import.meta.env.BASE_URL}images/project-sustainable.svg`,
    tags: ["Logo Design", "Brand Guidelines", "Adobe Creative Suite"],
  },
  {
    id: 3,
    slug: "fitness-app",
    title: "App",
    description:
      "Mobile app design for fitness enthusiasts with workout tracking, progress analytics, and social features. Focused on intuitive UX and motivating design.",
    category: "App",
    image: `${import.meta.env.BASE_URL}images/project-fitness.svg`,
    tags: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
  },
  {
    id: 4,
    slug: "3d-product-visualization",
    title: "3D Product Visualization",
    description:
      "High-quality 3D renders and animations for product showcases, featuring photorealistic materials, lighting, and dynamic camera movements.",
    category: "3D Design",
    image: `${import.meta.env.BASE_URL}images/project-product.svg`,
    tags: ["Blender", "Cinema 4D", "Rendering", "Animation"],
  },
  {
    id: 5,
    slug: "lifestyle-brand-website",
    title: "Website",
    description:
      "A modern, responsive platform built for a lifestyle brand website concept.",
    category: "Web Design",
    image: `${import.meta.env.BASE_URL}images/project-website.svg`,
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    slug: "streetwear-branding",
    title: "Streetwear Branding",
    description:
      "A contemporary brand direction for a streetwear label with expressive typography and elevated retail visuals.",
    category: "Brand Identity",
    image: `${import.meta.env.BASE_URL}images/project-streetwear.svg`,
    tags: ["Brand Strategy", "Typography", "Packaging", "Art Direction"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    slug: "hot-chicken-branding",
    title: "Hot Chicken Branding",
    description:
      "A bold identity system for a neighborhood restaurant concept that blends heat, personality, and craft.",
    category: "Brand Identity",
    image: `${import.meta.env.BASE_URL}images/project-hotchicken.svg`,
    tags: ["Brand Identity", "Illustration", "Menu Design", "Campaign"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    slug: "3d-product-visualization",
    title: "3D Product Visualization",
    description:
      "High-quality 3D renders and animations for product showcases, featuring photorealistic materials, lighting, and dynamic camera movements.",
    category: "3D Design",
    image: `${import.meta.env.BASE_URL}images/project-product.svg`,
    tags: ["Blender", "Cinema 4D", "Rendering", "Animation"],
  },
  {
    id: 9,
    slug: "3d-product-visualization",
    title: "3D Product Visualization",
    description:
      "High-quality 3D renders and animations for product showcases, featuring photorealistic materials, lighting, and dynamic camera movements.",
    category: "3D Design",
    image: `${import.meta.env.BASE_URL}images/project-product.svg`,
    tags: ["Blender", "Cinema 4D", "Rendering", "Animation"],
  },
];
