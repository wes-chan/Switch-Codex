import cherryImg from '../assets/cherry.webp';
import alpsImg from '../assets/alps.webp';

const switchFamily = [
    {
        name: "Cherry MX",
        description: "The Cherry MX switches are mechanical keyboard switch developed by Cherry AG. It is the defacto keyboard switch platform used by most modern mechanical keyboards.",
        imageURL: cherryImg,
    },
    {
        name: "Alps SKCL/SKCM",
        description: "The Alps SKCL and SKCM switches were mechanical keyboard switches developed by Alps Electric. They were Cherry's competitiors during the 1980s and 1990s.",
        imageURL: alpsImg,
    }
]


function Family(){
    return (
    <section className="py-12 px-6 bg-stone-200">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl mb-4 text-center font-semibold text-stone-900">Switch Family</h2>
        </div>
                <div className="flex flex-row justify-center items-start gap-30 text-center mt-16">
                     {switchFamily.map((sw) => (
                    <div key={sw.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 w-full max-w-sm">
            <img src={sw.imageURL} alt={sw.name} className="bg-stone-200 rounded-xl p-4 h-48 object-contain m-4 "  />
            <h2 className="p-4  text-xl font-bold text-stone-800">{sw.name}</h2>
            <h3>{sw.description}</h3>

          </div>
        ))}
        </div>
    
    </section>
    )
}

export default Family;