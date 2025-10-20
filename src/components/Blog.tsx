export default function Blog() {
    const posts = [
        { title: "The Secret to Glowing Skin", excerpt: "Discover simple daily habits that enhance your natural glow." },
        { title: "Sustainable Skincare Practices", excerpt: "How to make eco-conscious choices without compromising results." },
        { title: "Understanding Your Skin Type", excerpt: "Tips to identify and care for your unique skin needs." },
        { title: "Ingredients to Look For", excerpt: "Learn which natural ingredients can benefit your skin the most." },
        { title: "Self-Care Rituals", excerpt: "Small routines that promote both skin health and overall well-being." },
    ];

    return (
        <section className="flex flex-col items-center justify-center bg-dark py-20 px-6 lg:px-24">
            <div className="max-w-4xl text-center space-y-6 text-white mb-16">
                <h1 className="text-4xl lg:text-5xl font-light tracking-wide">
                    Our <span className="font-semibold text-mint-green">Blog</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Insights, tips, and stories about skincare, self-care, and sustainable beauty.
                </p>
            </div>

            <div className="flex flex-col gap-12 max-w-4xl w-full">
                {posts.map((post, idx) => (
                    <div
                        key={idx}
                        className="bg-white/90 rounded-3xl p-10 shadow-lg transition-all duration-300 hover:shadow-mint-green/20 flex flex-col"
                    >
                        <h2 className="text-3xl font-semibold text-black mb-6">{post.title}</h2>
                        <p className="text-black text-lg leading-relaxed mb-6">{post.excerpt}</p>
                        <div className="flex justify-end">
                            <button className="bg-mint-green text-gray-900 font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
