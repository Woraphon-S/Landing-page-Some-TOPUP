import { useState, useRef, useEffect } from 'react'
import './Banner.css'
import { GrNext, GrPrevious } from "react-icons/gr";

const Banner = () => {
    const [positions, setPositions] = useState(['left', 'center', 'right']);
    const intervalRef = useRef(null);

    const rotateLeft = () => {
        setPositions((prev) => {
            const [first, ...rest] = prev
            return [...rest, first]
        })
    }

    const rotateRight = () => {
        setPositions((prev) => {
            const last = prev[prev.length - 1]
            return [last, ...prev.slice(0, prev.length - 1)]
        })
    }

    const startAutoSlide = () => {
        intervalRef.current = setInterval(rotateLeft, 5000)
    }

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        startAutoSlide()
        return () => stopAutoSlide();
    }, []);

    const bannerBoxRef = useRef(null);

    useEffect(() => {
        const bannerBox = bannerBoxRef.current;
        bannerBox.addEventListener('mouseenter', stopAutoSlide);
        bannerBox.addEventListener('mouseleave', startAutoSlide);
        return () => {
            bannerBox.removeEventListener('mouseenter', stopAutoSlide);
            bannerBox.removeEventListener('mouseleave', startAutoSlide);
        };
    }, []);

    return (
        <div className='Banner container-in'>
            <div className='Banner-Container' ref={bannerBoxRef}>
                <div className={`Banner-item ${positions[0]}`}>Banner1</div>
                <div className={`Banner-item ${positions[1]}`}>Banner2</div>
                <div className={`Banner-item ${positions[2]}`}>Banner3</div>

                <div className='pre-next-box'>
                    <div className='pre-btn' onClick={rotateRight}><GrPrevious /></div>
                    <div className='next-btn' onClick={rotateLeft}><GrNext /></div>
                </div>
            </div>
        </div>
    )
}

export default Banner