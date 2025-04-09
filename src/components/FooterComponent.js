import React from 'react';

export function FooterComponent() {
    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-500 text-white pt-4 pb-12">
            {/* Row 1: Newsletter Subscription */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-12 px-6">
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold mb-2 text-gray-100">Weekly News Letter</h1>
                    <p className="text-gray-300">Stay updated with the latest news and offers</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="p-3 rounded-md text-gray-800 focus:outline-none"
                    />
                    <button
                        className="text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none"
                        style={{ backgroundColor: '#fb923c' }}  // Tailwind's bg-orange-500 color hex
                    >
                        Subscribe
                    </button>

                </div>
            </div>

            {/* Row 2: 4 Columns with Titles and Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 mt-12">
                {/* About Us */}
                <div>
                    <h2 className="text-white text-md font-bold mb-4 text-gray-100">About Us</h2>
                    <div className="text-sm text-gray-200 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel velit et leo ullamcorper convallis.
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40x40"
                            alt="Mobile Logo"
                            className="w-10 h-10 object-cover rounded-full"
                        />
                        <span>+1 (800) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <img
                            src="https://via.placeholder.com/40x40"
                            alt="Location Logo"
                            className="w-10 h-10 object-cover rounded-full"
                        />
                        <span>123 Main St, City, Country</span>
                    </div>
                </div>

                {/* Latest News */}
                <div>
                    <h2 className="text-white text-md font-bold mb-4 text-gray-100">Latest News</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-200">
                            <span>&#8594;</span>
                            <span className="hover:text-orange-500 cursor-pointer">New feature release coming soon</span>
                        </div>
                        <div className="text-gray-500 text-sm">5 minutes ago</div>
                        <div className="flex items-center space-x-2 text-gray-200">
                            <span>&#8594;</span>
                            <span className="hover:text-orange-500 cursor-pointer">Join our webinar this Friday</span>
                        </div>
                        <div className="text-gray-500 text-sm">1 hour ago</div>
                    </div>
                </div>

                {/* Customer Services */}
                <div>
                    <h2 className="text-white text-md font-bold mb-4 text-gray-100">Customer Services</h2>
                    <ul className="space-y-4 text-gray-200">
                        <li className="flex items-center">
                            <span className="text-xl mr-3">➡</span>
                            <span>Support Forums</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl mr-3">➡</span>
                            <span>FAQ</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl mr-3">➡</span>
                            <span>Communication</span>
                        </li>
                    </ul>
                </div>

                {/* Customer Service Images */}
                <div>
                    <h2 className="text-white text-md font-bold mb-4 text-gray-100">Customer Service</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <img src="https://via.placeholder.com/150" alt="Image 1" className="w-full h-32 object-cover rounded-lg" />
                        <img src="https://via.placeholder.com/150" alt="Image 2" className="w-full h-32 object-cover rounded-lg" />
                        <img src="https://via.placeholder.com/150" alt="Image 3" className="w-full h-32 object-cover rounded-lg" />
                        <img src="https://via.placeholder.com/150" alt="Image 4" className="w-full h-32 object-cover rounded-lg" />
                        <img src="https://via.placeholder.com/150" alt="Image 5" className="w-full h-32 object-cover rounded-lg" />
                        <img src="https://via.placeholder.com/150" alt="Image 6" className="w-full h-32 object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Divider between rows */}
            <div className="border-t-2 border-gray-400 mt-12"></div>

            {/* Fixed "Return to Top" Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
                aria-label="Scroll to top"
                style={{ backgroundColor: '#fb923c' }}  // Tailwind's bg-orange-500 color hex
            >
                ↑
            </button>
        </footer>
    );
}
