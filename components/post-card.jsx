import { Clock } from "lucide-react";
import Link from "next/link";

export default function PostCard({
  className = "",
  image,
  title,
  category = [],
  imageClassName,
  textClassName,
  showEditor = true,
  floating = true,
}) {
  return (
    <div className={`bg-gray-800 border-gray-700 overflow-hidden ${className}`}>
      <div className="relative">
        <img
          src={image}
          alt="WhatsApp Scams Infographic"
          width={400}
          height={400}
          className={`w-full h-[300px] md:h-[400px] object-cover ${imageClassName}`}
        />
        <div
          className={
            "bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 " +
            (floating ? "absolute" : "")
          }
        >
          <div className="flex gap-2 mb-3">
            {category.map((cat, index) => (
              <div
                key={index}
                className={`bg-red-600 text-xs flex items-center px-2 ${index == 1 && "bg-blue-700"}`}
              >
                {cat}
              </div>
            ))}
          </div>
          <Link href={`/${title.split(" ").join("-")}`}>
            <h1
              className={`text-xl md:text-3xl ${textClassName} font-bold mb-2`}
            >
              {title}
            </h1>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            {showEditor && (
              <div className="flex items-center gap-1">
                <span className="text-sm">The Infosiast Editor</span>
              </div>
            )}
            <div className="flex items-center gap-1  text-gray-300">
              <Clock className="w-4 h-4" />
              <span className="text-xs">May 21, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
