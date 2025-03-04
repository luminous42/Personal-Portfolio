"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Tool {
  name: string;
  icon: string | StaticImageData;
}

interface InfiniteSliderProps {
  tools: Tool[];
  isDarkMode: boolean;
}

const ITEM_WIDTH = 100; // width of each tool box (including gap)
const GAP = 32; // gap size (8 Tailwind = 32px)

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  tools,
  isDarkMode,
}) => {
  const duplicatedTools = [...tools, ...tools];

  const totalWidth = duplicatedTools.length * (ITEM_WIDTH + GAP);
  const originalSetWidth = tools.length * (ITEM_WIDTH + GAP);

  return (
    <div className="relative w-full overflow-hidden py-4 bg-gray-50 dark:bg-darkTheme">
      <motion.div
        className="flex items-center"
        animate={{
          x: [0, -originalSetWidth],
        }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex flex-col items-center"
            style={{ width: `${ITEM_WIDTH}px`, marginRight: `${GAP}px` }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white rounded-lg p-2 shadow-sm">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
