import PostCard from "./post-card";

const featuredArticles = [
  {
    id: 14,
    title: "Iron Mike: The Knockout King and Enduring Legacy of Mike Tyson",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2024",
  },
  {
    id: 15,
    title: "Martha Stewart: The Empress of Domesticity",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    date: "April 11, 2024",
  },
  {
    id: 16,
    title: "“Oppenheimer” Screening in Japan Stirs Unease Amid Nuclear Legacy",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: "March 29, 2024",
  },
  {
    id: 17,
    title: "Dive into the Blocky Brilliance: Exploring the World of Minecraft",
    image: "https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=800&q=80",
    date: "February 24, 2024",
  },
  {
    id: 18,
    title: "Oinktastic Fun: Exploring the World of Peppa Pig With Us",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    date: "February 24, 2024",
  },
];

export default function Posts() {
  return (
    <div className="bg-tertiary p-4">
      <div className="grid md:grid-cols-3 gap-4">
        {featuredArticles.map((article) => (
          <PostCard
            key={article.id}
            title={article.title}
            image={article.image}
            className={article.id == 14 && "md:col-span-2"}
            textClassName="!text-2xl !-mt-4 text-xl"
            floating={false}
            imageClassName={"!h-[250px]"}
          />
        ))}
      </div>
    </div>
  );
}
