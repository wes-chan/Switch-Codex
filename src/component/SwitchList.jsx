import { useState } from "react";
import List from "../switches.json";

function switchTab() {
    const [activeTab, setactiveTab] = useState(List[0].name);

    const currentTab = List.find((tab) => tab.name === activeTab) || { variants: [] };



    return (
        <section className="py-12" >
            <div className="text-center mb-8">
                <h2 className="text-5xl">Switches</h2>
            </div>

                <div className="flex justify-center gap-4 mb-8 text-xl ">
                    {List.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setactiveTab(tab.name)}
                            className={`px-4 py-2 rounded cursor-pointer ${activeTab === tab.name ? 'bg-pink-300' : 'bg-pink-200' }`} flex items-center justify-center text-center>
                                {tab.name}
                            </button>
                    ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {currentTab.variants.map((item, index) => (
                    <div key={index} className="p-6 border rounded shadow w-full text-center w-full max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        </div>
                ))}

            </div>


            

        </section>
    

    )

}

export default switchTab;