import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    img?: string;
    tags?: string[];
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          target="_blank"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card 
            img={item?.img} 
            tags={item?.tags} 
            isHovered={hoveredIndex === idx}
            title={item.title}
            description={item.description}
          />
        </Link>
      ))}
    </div>
  );
};

const Tags = ({ tags }: { tags?: string[] }) => {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  img = "",
  tags,
  isHovered,
  title,
  description
}: {
  className?: string;
  img?: string;
  tags?: string[];
  isHovered: boolean;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-20 h-full">
        <img 
          src={img} 
          alt={title} 
          className={cn("w-full h-full object-cover" , isHovered ? " opacity-20" : "opacity-90")}
        />
        <div className="absolute inset-0 bg-gradient-to-t  from-black  to-transparent  opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="z-30"
              >
                <p className="text-zinc-100 tracking-wide leading-relaxed text-sm mb-2">
                  {description}
                </p>
                <Tags tags={tags} />
              </motion.div>
            )}
          </AnimatePresence>
          <h4 className={cn("text-zinc-100 font-bold tracking-wide text-lg z-30" , isHovered ? "mt-0" : "mt-40")}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};