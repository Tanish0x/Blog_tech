import { categoriesData } from "../../../data/categories";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const categoryName = decodeURIComponent(params.category).replace(/-/g, ' ');
  const category = categoriesData.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return <div className="p-8 text-white">Category not found.</div>;
  }

  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-white">{category.name}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.articles.map((article) => (
          <div key={article.id} className="bg-secondary rounded-lg shadow p-4 flex flex-col">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">{article.title}</h2>
            <p className="text-gray-400 text-xs mb-2">{article.date}</p>
            <Link
              href={`/${article.title.split(" ").join("-")}`}
              className="mt-auto text-primary font-bold hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
} 