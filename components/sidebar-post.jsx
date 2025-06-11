"use client";
import { Clock, Zap, Clock1 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const interestingArticles = [
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

const popularArticles = [
  {
    id: 5,
    title: "The Most Popular Home Gadgets of 2024",
    image: "https://picsum.photos/id/27/200/300",
    date: "January 10, 2024",
    category: "Gadgets",
  },
  {
    id: 6,
    title: "Top 10 Trending Recipes This Year",
    image: "https://picsum.photos/id/28/200/300",
    date: "February 15, 2024",
    category: "Food",
  },
  {
    id: 7,
    title: "Best Fitness Apps for Home Workouts",
    image: "https://picsum.photos/id/29/200/300",
    date: "March 5, 2024",
    category: "Fitness",
  },
  {
    id: 8,
    title: "How Smart Homes Are Changing Our Lives",
    image: "https://picsum.photos/id/30/200/300",
    date: "April 1, 2024",
    category: "Smart Home",
  },
];

export default function SidebarPosts({
  className,
  showNav = true,
  customPost = [],
  text = "INTERESTING",
}) {
  const [activeTab, setActiveTab] = useState("interesting");
  const articles = activeTab === "interesting" ? interestingArticles : popularArticles;

  return (
    <div className={className}>
      <div className="flex w-full">
        <button
          className={`flex items-center px-3 text-sm w-full rounded-none h-8 font-medium ${activeTab === "interesting" ? "bg-primary text-white hover:bg-red-700" : "border-b-2 border-b-primary text-gray-300 hover:bg-gray-600"}`}
          onClick={() => setActiveTab("interesting")}
        >
          <Zap className="w-3 h-3 mr-2" />
          INTERESTING
        </button>
        {showNav && (
          <button
            className={`flex items-center px-3 text-sm w-full rounded-none h-8 font-medium ${activeTab === "popular" ? "bg-primary text-white hover:bg-red-700" : "border-b-2 border-b-primary text-gray-300 hover:bg-gray-600"}`}
            onClick={() => setActiveTab("popular")}
          >
            <Clock1 className="w-3 h-3 mr-2" />
            POPULAR
          </button>
        )}
      </div>

      <div className="">
        {articles.map((article) => (
          <div key={article.id} className="cursor-pointer">
            <div className="pt-[15px]">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>

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
