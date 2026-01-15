import { EXPERIENCE } from "..";
import { useState, useEffect } from "react";

const Experience = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);

    const openPopup = (images) => {
        setSelectedImages(images);
        setCurrentIndex(0);
        setIsPopupOpen(true);
    };
    const closePopup = () => setIsPopupOpen(false);

        useEffect(() => {
            if (isPopupOpen && selectedImages.length > 0) {
                const interval = setInterval(() => {
                    setCurrentIndex(
                        (prevIndex) => (prevIndex + 1) % selectedImages.length
                    );
                }, 3000);

                return () => clearInterval(interval);
            }
        }, [isPopupOpen, selectedImages]);


    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + selectedImages.length) % selectedImages.length
        );
    };

    const goToNext = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex + 1) % selectedImages.length
        );
    };

    return (
        <div className="border-b border-neutral-800 pb-4">
            <h1 className="my-20 text-center text-4xl">Experiences</h1>
            <div>
                {EXPERIENCE.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/5">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/5">
                            <h6 className="mb-2 font-semibold">{experience.role}</h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-400">{tech}</span>
                            ))}
                        </div>
                        <div className="w-full lg:w-1/5">
                            <button
                                className="ml-20 rounded px-4 py-2 text-neutral-900 bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 hover:from-pink-500 hover:to-purple-600 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-105"
                                onClick={() => openPopup(experience.images)}
                            >
                                View project
                            </button>
                        </div>
                    </div>
                ))}
            </div>

       {isPopupOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="relative w-11/12 max-w-4xl rounded-2xl bg-neutral-900 p-6 shadow-2xl">

                    {/* Close button */}
                    <button
                        onClick={closePopup}
                        className="absolute right-4 top-4 text-xl text-neutral-400 hover:text-white transition"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>

                    <h2 className="mb-6 text-center text-2xl font-bold text-white">
                        Project Preview
                    </h2>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={selectedImages[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="h-72 w-full max-w-3xl rounded-xl object-cover border border-neutral-700 shadow-lg"
                        />
                    </div>

                    {/* Controls */}
                    <div className="mt-6 flex justify-center gap-6">
                        <button
                            onClick={goToPrevious}
                            className="rounded-lg bg-neutral-800 px-6 py-2 text-white transition hover:bg-neutral-700 hover:scale-105"
                        >
                            Previous
                        </button>

                        <button
                            onClick={goToNext}
                            className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 text-white transition hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
                        >
                            Next
                        </button>
                    </div>

                    {/* Indicator */}
                    <p className="mt-4 text-center text-sm text-neutral-400">
                        {currentIndex + 1} / {selectedImages.length}
                    </p>
                </div>
            </div>
        )}
        </div>
    );
};

export default Experience;