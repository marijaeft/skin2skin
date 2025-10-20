export default function AboutUs() {
    return (
        <section className="flex flex-col items-center justify-center bg-dark py-20 px-6 lg:px-24">
            <div className="max-w-4xl text-center space-y-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-light tracking-wide">
                    Discover the Heart of{" "}
                    <span className="font-semibold text-mint-green">Skin2Skin</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                    At Skin2Skin, we believe skincare should be simple, mindful, and kind —
                    both to your skin and the planet. Our mission is to help you discover
                    your natural glow through clean, personalized routines powered by
                    nature and guided by science.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl w-full">
                <div className="bg-pink-100 rounded-3xl p-10 backdrop-blur-sm border transition-all duration-300 shadow-lg text-black">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-mint-green mb-4">
                        Our Philosophy
                    </h2>
                    <p className="leading-relaxed">
                        We craft each formula with care — balancing effective ingredients and
                        gentle textures that nourish, not irritate. Our focus is timeless
                        skincare that enhances your natural beauty, not masks it.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm">
                        <li>• Thoughtfully curated ingredients</li>
                        <li>• Cruelty-free and eco-conscious</li>
                        <li>• Designed for real skin, not perfection</li>
                    </ul>
                </div>

                <div className="bg-white/10 rounded-3xl p-10 backdrop-blur-sm border border-white/10 hover:border-mint-green/40 transition-all duration-300 shadow-lg hover:shadow-mint-green/10">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-mint-green mb-4">
                        Sustainability Promise
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Every product is packed with care using recyclable, minimal
                        packaging. We partner with ethical suppliers to ensure that what’s
                        good for your skin is also good for our planet.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {["Eco-friendly", "Cruelty-free", "Recyclable"].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1 text-sm rounded-full bg-pink-100 text-black font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mt-20 text-center">
                <h3 className="text-2xl lg:text-3xl font-semibold text-mint-green mb-4">
                    Our Vision
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                    To empower everyone to feel confident in their own skin — through
                    sustainable, personalized skincare that celebrates self-love,
                    authenticity, and the beauty of simplicity.
                </p>
                <button className="mt-10 bg-mint-green text-gray-900 font-semibold py-3 px-10 rounded-full hover:scale-105 transition-transform duration-300">
                    Start Your Glow Journey
                </button>
            </div>
        </section>
    );
}
