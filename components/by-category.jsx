"use client";
import { Clock } from "lucide-react";
import Link from "next/link";
import { categoriesData } from "../data/categories";

export default function ByCategory() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4 bg-tertiary">
      {categoriesData.map((cat) => (
        <div className="grid" key={cat.name}>
          <div className="border-b-2 border-primary mb-2">
            <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
              {cat.name}
            </div>
          </div>
          {cat.articles.map((article) => (
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
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/${article.title.split(" ").join("-")}`}
                      className="flex-1 min-w-0"
                    >
                      <h3 className="font-bold text-white text-sm leading-tight mb-2 line-clamp-3">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
