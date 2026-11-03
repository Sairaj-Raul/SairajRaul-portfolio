import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ProjectDetailsData, ProjectScreenshot } from '../../types';

interface ProjectGalleryProps {
  data: ProjectDetailsData;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<ProjectScreenshot | null>(null);

  const categories = [
    'all',
    ...Array.from(new Set(data.screenshots.map((s) => s.category))),
  ];

  const filteredScreenshots =
    activeCategory === 'all'
      ? data.screenshots
      : data.screenshots.filter((s) => s.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = data.screenshots.findIndex((s) => s.url === selectedImage.url);
    const nextIndex = (currentIndex + 1) % data.screenshots.length;
    setSelectedImage(data.screenshots[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = data.screenshots.findIndex((s) => s.url === selectedImage.url);
    const prevIndex = (currentIndex - 1 + data.screenshots.length) % data.screenshots.length;
    setSelectedImage(data.screenshots[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 relative border-b border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Application Gallery & Visual Assets
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Authentic production screens, mobile interfaces, and architecture assets. Click any image to inspect in full resolution.
            </p>
          </div>

          {/* Filter tabs */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-dark-border self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-neon text-dark-950 font-semibold shadow-sm'
                      : 'text-muted hover:text-white hover:bg-dark-800'
                  }`}
                >
                  {cat === 'all' ? 'All Assets' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-2xl border border-dark-border bg-dark-850/80 overflow-hidden hover:border-neon/50 hover:shadow-dark-card transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[9/16] max-h-[460px] w-full bg-dark-950/60 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-dark-900/90 border border-neon/50 text-neon flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-dark-900/90 border border-dark-border text-slate-200 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 border-t border-dark-border/60 bg-dark-900/70">
                <p className="text-xs text-slate-300 leading-relaxed font-medium line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-neon">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view full preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-dark-800 text-slate-200 hover:text-white hover:bg-dark-700 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            {data.screenshots.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-850/90 text-white border border-dark-border hover:border-neon hover:text-neon transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-850/90 text-white border border-dark-border hover:border-neon hover:text-neon transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Modal Image */}
            <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-900 shadow-2xl max-h-[75vh] flex items-center justify-center p-2">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-h-[72vh] max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Caption & Category */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neon/10 border border-neon/30 text-neon mb-1.5">
                {selectedImage.category}
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
