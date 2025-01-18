import { useState } from "react"

export default function AnimacionWsp() {
    const [isAnimated, setIsAnimated] = useState(true)
    const animar = () => {
        setTimeout(() => {
            setIsAnimated(false)
        }, 8000);
    }
    animar()
    return (
        <div className="fixed left-4 bottom-4 z-50 md:left-6 md:bottom-6 cursor-pointer group">
            <div className={`absolute bottom-full left-0 mb-2 ${isAnimated ? "" : "opacity-0"}  transition-opacity duration-300 animate-bounce`}>
                <div className="bg-white px-4 py-2 rounded-2xl shadow-lg relative font-mono">
                    <span className="text-sm font-medium text-gray-800">Chatea conmigo</span>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
            </div>
            <a href="https://wa.me/+541162019320" target='_blank'>
                <img
                    src="/whatsapp.svg"
                    alt="whatsapp"
                    className="w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-300"
                />
            </a>
        </div>
    )
}