import { motion, AnimatePresence } from "framer-motion";

export default function MenuOverlay({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 bg-[#5155a6] text-white"
                >
                    {/* TOP BAR */}
                    <div className="flex justify-between items-start px-6 sm:px-10 py-6">
                        <div className="flex items-center">
                            <img src="./logo.png" alt="logo" className="w-14" />
                            <div className="ml-2">
                                <div className="font-bold text-lg">HUMGENCE</div>
                                <div className="text-xs opacity-70">
                                    Inspiring Human Intelligence
                                </div>
                            </div>
                        </div>

                        {/* CLOSE ICON */}
                        <button
                            onClick={onClose}
                            className="text-2xl font-light hover:opacity-70"
                        >
                            ✕
                        </button>
                    </div>

                    {/* CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 mt-16">

                        {/* LEFT NAV */}
                        <motion.ul
                            initial={{ x: -80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-4 text-3xl sm:text-4xl font-semibold"
                        >
                            <li className="cursor-pointer hover:opacity-70">HOME</li>
                            <li className="cursor-pointer hover:opacity-70">THE WORK</li>
                            <li className="cursor-pointer hover:opacity-70">ABOUT US</li>
                            <li className="cursor-pointer hover:opacity-70">LOCATIONS</li>
                            <li className="cursor-pointer hover:opacity-70">CONTACT US</li>
                        </motion.ul>

                        {/* RIGHT INFO */}
                        <motion.div
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-sm sm:text-base max-w-md"
                        >
                            <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
                            <p>
                                SCO 17, 18 Model Town Extension,<br />
                                Ludhiana, India
                            </p>

                            <div className="mt-4 space-y-1">
                                <p>info@humgence.com</p>
                                <p>+91 7508400002</p>
                                <p>+971 58 506 6985</p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
