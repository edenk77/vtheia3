import React from 'react';

interface ImageLoaderProps {
    preview: string;
    src: string;
    alt: string;
    imageStyleClass?: string;
    divStyleClass?: string;
    bgColor?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
    preview,
    src,
    alt,
    imageStyleClass = '',
    divStyleClass = '',
    bgColor = 'transparent',
}) => {
    const [currentImage, setCurrentImage] = React.useState(preview);
    const [loading, setLoading] = React.useState<boolean>(true);

    const fetchImage = (src: string) => {
        const loadingImage = new Image();
        loadingImage.src = src;
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src);
            setLoading(false);
        };
    };

    React.useEffect(() => {
        fetchImage(src);
    }, []);

    return (
        <div className={divStyleClass} style={{ overflow: 'hidden' }}>
            <img
                style={{
                    filter: `${loading ? 'blur(20px)' : ''}`,
                    transition: '1s filter linear',
                    width: '100%',
                    background: bgColor,
                }}
                src={currentImage}
                alt={alt}
                className={imageStyleClass}
            />
        </div>
    );
};

export default ImageLoader;
