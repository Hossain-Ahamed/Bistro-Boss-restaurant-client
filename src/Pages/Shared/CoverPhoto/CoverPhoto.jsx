import React from 'react';
import { Parallax } from 'react-parallax';

const CoverPhoto = ({ img, title, msg }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
            style={{
                ObjectFit: 'cover'
            }}

        >
            <div className="hero  w-full aspect-video" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content  px-10 lg:px-24  py-4" style={{ backgroundColor: 'rgba(21, 21, 21, 0.60)' }}>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-medium  uppercase font-[Cinzel]">{title}</h1>
                        <p className="mb-5   line-clamp-2 text-base">{msg}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default CoverPhoto;