import PostCard from "./post-card";

const featuredArticles = [
  {
    id: 1,
    title:
      "The Impact of Artificial Intelligence on Human Creativity and Intellectual Labor",
    image: "https://picsum.photos/id/10/200/300",
    date: "October 4, 2024",
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "The Deep Sea's Surprising Secret: Oxygen Production in the Dark!",
    image: "https://picsum.photos/id/11/200/300",
    date: "July 24, 2024",
    category: "Science Technology",
  },
  {
    id: 3,
    title:
      "Revolutionizing Brain Imaging: A Deep Dive into MIT’s New Microscopy Technology",
    image: "https://picsum.photos/id/12/200/300",
    date: "June 26, 2024",
    category: "Science Technology",
  },
  {
    id: 4,
    title:
      "Ancient Teeth Reveal How Our Dental Plaque Evolved with Human Diets",
    image: "https://picsum.photos/id/13/200/300",
    date: "April 1, 2024",
    category: "News",
  },
];

export default function FeaturedPosts() {
  return (
    <div className="p-4 bg-tertiary">
      <div className="border-b-2 border-primary">
        <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
          Featred Posts
        </div>
      </div>
      <div className="grid md:flex items-center mt-4 gap-4">
        {featuredArticles.map((article) => (
          <PostCard
            key={article.id}
            title={article.title}
            image={article.image}
            category={article.category.split(" ")}
            imageClassName="!h-[200px] !w-[400px]"
            className="h-[200px] w-[300px]"
            textClassName="!text-sm -mt-2 mb-1"
            showEditor={false}
          />
        ))}
      </div>
    </div>
  );
}
