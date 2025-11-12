'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  showDots?: boolean
  autoplay?: boolean
  autoplayDelay?: number
}

export default function Carousel({
  children,
  className = '',
  showDots = true,
  autoplay = false,
  autoplayDelay = 3000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!autoplay || !emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [autoplay, autoplayDelay, emblaApi])

  return (
    <div className={`relative ${className}`}>
      {/* Carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-dark p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-dark p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores (dots) */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-gradient-main w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
