import React from 'react'
import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        const particleCount = 50;
        const colors = ["rgba(255,255,255,0.7)"]
        //property of particle
        class Particle{
            constructor(){
                
                this.x = Math.random()*canvas.width;
                this.y = Math.random()*canvas.height;
                this.radius  = Math.random()*2 +1;
                this.color = colors[Math.floor(Math.random()*colors.length)]
                
                this.speedX = (Math.random()-0.5)*0.5
                this.speedY = (Math.random()-0.5)*0.5
            }
            //method or function
            draw(){
                //start to draw (2d draw)
                ctx.beginPath();
                //circle shape
                ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
                ctx.shadowBlur =10;
                ctx.shadowColor = this.color
                ctx.fillStyle = this.color
                ctx.fill()
            }
            update(){
                //move particle horixontally
                this.x += this.speedX
                this.y += this.speedY
                if(this.x <0) this.x = canvas.width;
                if(this.x > canvas.width) this.x = 0
                if(this.y <0) this.y = canvas.height;
                if(this.y > canvas.height) this.y = 0
                this.draw();
            }
            

        }

        function createParticle(){
            particles =[];
            for(let i=0;i<particleCount;i++){
                //we create object of here
                particles.push(new Particle)
            }
        }
        
        function handldeResize(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticle();
        }
        handldeResize();
        window.addEventListener("resize",handldeResize);

        let animationId;
        function animate(){
            ctx.clearRect(0,0,canvas.width, canvas.height);
            particles.forEach(element => {
                element.update()
                
            });
            animationId = requestAnimationFrame(animate);
        }
        animate();
        return ()=>{
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize",handldeResize)
        }
        
    },[])
    

    return (
        // pointer-events-none The element will NOT receive mouse/pointer events.
        
        <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full pointer-events-none z-0'>

        </canvas>
    )
}

export default ParticleBackground
