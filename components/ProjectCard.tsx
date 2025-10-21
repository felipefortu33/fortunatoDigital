import { ExternalLink, Code2 } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="card group overflow-hidden">
      {/* Imagem do projeto */}
      <div className="relative h-48 bg-gradient-main overflow-hidden rounded-lg mb-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-16 h-16 text-white/50" />
          </div>
        )}

        {/* Overlay com gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-4 py-2 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Code2 className="w-4 h-4" />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="space-y-3">
        <h3 className="text-xl font-heading font-bold text-dark group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags de tecnologias */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gradient-main hover:text-white transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
