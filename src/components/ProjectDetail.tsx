import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";

interface ProjectDetailProps {
  project: Project | undefined;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const homeUrl = `${import.meta.env.BASE_URL}#work`;

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50 px-4 pt-12">
        <div className="container mx-auto max-w-3xl">
          <a
            href={homeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-orange-400 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>
          <h1 className="mt-16 text-4xl font-semibold">Project not found</h1>
          <p className="mt-4 text-muted-foreground">
            This project may have been moved or is no longer available.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50 px-4 py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl">
        <a
          href={homeUrl}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-orange-400 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </a>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
              {project.category}
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white/80 p-2 shadow-xl shadow-rose-900/5">
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} project preview`}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <section className="mt-12 grid gap-8 rounded-2xl border border-orange-100 bg-white/80 p-6 shadow-sm sm:p-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-orange-700">
              Project details
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Overview</h2>
          </div>
          <div>
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Tools &amp; focus
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-orange-200 bg-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-medium text-orange-700 transition-colors hover:text-rose-700"
              >
                Visit live project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </section>

        <div className="mt-10 text-center">
          <a
            href={homeUrl}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 px-6 py-3 font-medium text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </a>
        </div>
      </div>
    </main>
  );
}
