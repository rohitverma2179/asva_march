import React, { useState } from 'react';

interface ProductGalleryProps {
    image: string;
    images?: string[];
    // enableZoom can be:
    // - boolean: enable/disable zoom for all images
    // - boolean[]: enable/disable zoom per image (matches index of images array)
    // - undefined: zoom enabled by default
    enableZoom?: boolean | boolean[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
    image,
    images: galleryImages,
    enableZoom = false // Default: zoom disabled. Enable via shopData.ts
}) => {
    // Use provided gallery images, or fallback to main image repeated (or empty)
    // If galleryImages is provided but has fewer than 4, we could fill it or just show them.
    // The user specifically asked for 4 different images.

    // If galleryImages is not provided, we fall back to the old behavior (repeated image) to avoid breaking other pages

    const displayImages = (galleryImages && galleryImages.length > 0)
        ? galleryImages : [image, image, image, image];

    // console.log(displayImages.length === 3);

    // Helper function to check if zoom is enabled for current image
    const isZoomEnabledForImage = (index: number): boolean => {
        if (typeof enableZoom === 'boolean') {
            return enableZoom;
        }
        if (Array.isArray(enableZoom)) {
            return enableZoom[index] ?? true; // Default to true if index not found
        }
        return true; // Default behavior
    };

    const [activeImage, setActiveImage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        // Calculate position as percentage 0-100
        let x = ((e.clientX - left)
            / width) * 100;
        let y = ((e.clientY - top) / height) * 100;

        // Clamp values
        if (x < 0) x = 0; if (x > 100) x = 100;
        if (y < 0) y = 0; if (y > 100) y = 100;

        setZoomPosition({ x, y });
    };

    return (
        <div className="flex gap-4 md:gap-6 h-[400px] md:h-[500px] lg:h-[600px] relative">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 w-12 md:w-14   shrink-0">
                {displayImages.slice(0, 4).map((img, idx) => (
                    <div
                        key={idx}
                        className={`aspect-square w-full rounded-xl border p-2 cursor-pointer transition-all
                    ${activeImage === idx ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-400'}
                `}
                        onClick={() => setActiveImage(idx)}
                        onMouseEnter={() => setActiveImage(idx)}
                    >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            {/* Main Image View */}
            <div className="flex-1 bg-white relative flex items-center justify-center p-0 md:p-0">
                <img
                    src={displayImages[activeImage]}
                    alt="Product Main"
                    className="h-[90%] w-auto object-contain max-h-full cursor-crosshair "
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseMove={handleMouseMove}
                />

                {/* Badges on the right inside main image container */}
                {/* <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex flex-col gap-3">
                    {badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="w-8 h-24 md:w-10 md:h-32 bg-[#00659e] rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg"
                        >
                            <span className="-rotate-90 text-xs text-white md:text-sm font-bold whitespace-nowrap tracking-widest">{badge}</span>
                        </div>
                    ))}
                </div> */}

                {/* Zoom Box (Canvas) */}
                {isHovering && isZoomEnabledForImage(activeImage) && (
                    <div
                        className="hidden lg:block absolute left-[99%] -top-14 h-[640px] w-[740px] bg-white border border-gray-200 shadow-2xl z-50 overflow-hidden"
                        style={{
                            backgroundImage: `url(${displayImages[activeImage]})`,
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            backgroundSize: '225%', // Magnification level
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Optional: Add a title "Zoomed View" or simply just the image */}
                    </div>
                )}
            </div>
        </div>
    );
};