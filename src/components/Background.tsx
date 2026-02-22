import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const isMobile = window.innerWidth < 768
        const particleCount = isMobile ? 40 : 100
        const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = []

        for (let j = 0; j < particleCount; j++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.5,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.3 + 0.05,
            })
        }

        let animId: number
        let lastThemeCheck = document.documentElement.classList.contains('light')

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = lastThemeCheck
                    ? `rgba(99, 102, 241, ${p.alpha * 0.6})`
                    : `rgba(99, 102, 241, ${p.alpha})`
                ctx.fill()
                p.x += p.dx
                p.y += p.dy
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1
            })
            animId = requestAnimationFrame(draw)
        }
        draw()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize) }
    }, [theme])

    const isLight = theme === 'light'

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0" />

            {isLight ? (
                <>
                    {/* Light mode soft gradient blobs */}
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-violet-300/15 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] bg-sky-300/15 rounded-full blur-[150px]" />
                    <div className="absolute top-[50%] left-[40%] w-[25%] h-[25%] bg-purple-200/20 rounded-full blur-[80px]" />
                    {/* Soft dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </>
            ) : (
                <>
                    {/* Dark mode blobs */}
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] bg-blue-600/10 rounded-full blur-[150px] opacity-50" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </>
            )}
        </div>
    )
}

export default Background
