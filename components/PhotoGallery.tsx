"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@/libs/supabase/client";

export interface Photo {
  id: string;
  title: string;
  description?: string;
  url: string;
  category?: string;
  created_at: string;
}

interface PhotoGalleryProps {
  initialPhotos?: Photo[];
}

export default function PhotoGallery({ initialPhotos = [] }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [loading, setLoading] = useState(initialPhotos.length === 0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (initialPhotos.length === 0) {
      fetchPhotos();
    }
  }, [initialPhotos.length]);

  async function fetchPhotos() {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  }

  const categories = ["all", ...new Set(photos.map((p) => p.category).filter(Boolean))];
  const filteredPhotos = filter === "all"
    ? photos
    : photos.filter((p) => p.category === filter);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-base-content/70">No photos yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as string)}
              className={`btn btn-sm ${
                filter === category ? "btn-primary" : "btn-ghost"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>
      )}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-base-200"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold truncate">{photo.title}</h3>
                {photo.category && (
                  <span className="text-sm text-white/80">{photo.category}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-auto h-[80vh]">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h2 className="text-xl font-semibold">{selectedPhoto.title}</h2>
              {selectedPhoto.description && (
                <p className="text-white/80 mt-1">{selectedPhoto.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
