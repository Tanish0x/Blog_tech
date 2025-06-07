import { Clock, Zap, TrendingUp, Clock1 } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Transform Your Bathroom with Simple and Affordable Upgrades",
    image: "https://picsum.photos/id/23/200/300",
    date: "December 4, 2023",
    category: "Home Improvement",
  },
  {
    id: 2,
    title:
      "Unlocking Culinary Bliss: Revamping Your Kitchen for Effortless Delight",
    image: "https://picsum.photos/id/24/200/300",
    date: "December 4, 2023",
    category: "Kitchen Design",
  },
  {
    id: 3,
    title:
      "Mastering the Art of Tiny Living: Elevate Your Small Apartment Game",
    image: "https://picsum.photos/id/25/200/300",
    date: "December 4, 2023",
    category: "Small Spaces",
  },
  {
    id: 4,
    title:
      "Crafting a Warm Welcome: Elevate Your Living Space into a Hub of Hospitality",
    image: "https://picsum.photos/id/26/200/300",
    date: "December 2, 2023",
    category: "Interior Design",
  },
];

export default function SidebarPosts({
  className,
  showNav = true,
  customPost = [],
  text = "INTERESTING",
}) {
  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex w-full">
        <button className="flex items-center bg-primary px-3 text-sm w-full hover:bg-red-700 text-white rounded-none h-8 font-medium">
          <Zap className="w-3 h-3 mr-2" />
          {text}
        </button>
        {showNav && (
          <button className="flex items-center border-b-2 border-b-primary px-3 text-sm w-full hover:bg-gray-600 text-gray-300 rounded-none h-8 font-medium">
            <Clock1 className="w-3 h-3 mr-2" />
            POPULAR
          </button>
        )}
      </div>

      {/* Articles List */}
      <div className="">
        {articles.map((article) => (
          <div key={article.id} className="cursor-pointer">
            <div className="pt-[15px]">
              <div className="flex gap-4">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>

                {/* Article Content */}
                <Link
                  href={`/${article.title.split(" ").join("-")}`}
                  className="flex-1 min-w-0"
                >
                  <h3 className="font-bold text-white text-sm leading-tight mb-2 line-clamp-3">
                    {article.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
