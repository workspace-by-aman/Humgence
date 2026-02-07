import { motion } from "framer-motion";
export default function DoBigThings() {
    return (
        <section className="bg-black px-4 sm:px-6 lg:px-10 py-16 md:py-20 text-center overflow-hidden">

            <motion.h2
                className="text-[100px] font-extrabold mt-2 uppercase whitespace-nowrap"
                animate={{ x: ["50%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                DO BIG THINGS
            </motion.h2>

            <motion.h2
                className="text-[100px] font-extrabold mt-2 uppercase whitespace-nowrap"
                animate={{ x: ["-50%", "50%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                style={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "3px #56c0db",
                }}
            >
                DO BIG THINGS
            </motion.h2>
        </section >

    );
}