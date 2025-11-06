import React from 'react';

const HeroSlide = () => {
    return (
        <div className="carousel w-full min-h-screen">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/Z1LHBGF2/Pix-Verse-Image-Effect-prompt-Winter-Snuggles-f-1.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">Winter Snuggles 🐶</h1>
                            <p className="mb-5 text-white">
                                Meet Max in his favorite fleece hoodie, ready to melt your heart this winter.
                            </p>
                            <button className="btn btn-secondary">Adopt the Look</button>
                        </div>
                    </div>
                </div>
                <a href="#slide3" className="btn btn-circle absolute left-5 top-1/2">❮</a>
                <a href="#slide2" className="btn btn-circle absolute right-5 top-1/2">❯</a>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/1GJkzG3s/Pix-Verse-Image-Effect-prompt-Cozy-Kitty-cat.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">Cozy Kitty 🐱</h1>
                            <p className="mb-5 text-white">
                                Luna loves her knitted scarf and snowy naps. Winter never looked so cute!
                            </p>
                            <button className="btn btn-secondary">Shop Petwear</button>
                        </div>
                    </div>
                </div>
                <a href="#slide1" className="btn btn-circle absolute left-5 top-1/2">❮</a>
                <a href="#slide3" className="btn btn-circle absolute right-5 top-1/2">❯</a>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/Nn1ByJQ6/Pix-Verse-Image-Effect-prompt-Furry-Friends.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">Furry Friends ❄️</h1>
                            <p className="mb-5 text-white">
                                From snow boots to puff jackets, our pets are winter-ready and picture-perfect.
                            </p>
                            <button className="btn btn-secondary">Explore Styles</button>
                        </div>
                    </div>
                </div>
                <a href="#slide2" className="btn btn-circle absolute left-5 top-1/2">❮</a>
                <a href="#slide1" className="btn btn-circle absolute right-5 top-1/2">❯</a>
            </div>
        </div>
    );
};

export default HeroSlide;