export default function SubscribeBanner() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center bg-[url('https://picsum.photos/id/1018/1000/600')] bg-cover bg-center bg-no-repeat">
      <div className="text-center space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base ">
          Stay updated with the latest tech news and trends.
        </p>
        <button className="bg-primary h-10 rounded px-3">Subscribe Now</button>
      </div>
    </div>
  );
}
