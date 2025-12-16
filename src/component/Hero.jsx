

function Hero({ title, subtitle}){
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-300  ">
        <div className="text-center ">
            <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-gray-900 ">{title}</h1>
            <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
    
    
    </div>
    </section>
    )
}

export default Hero;