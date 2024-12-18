const Page = () => {
  return (
    <div className="no-hightlight transition-all duration-500">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-fade-slide-right opacity-0">
          <div className="text-5xl font-extralight">
            Hello, I&apos;m <span className="text-blue-600">Andy</span>
          </div>
        </div>
        <div className="animate-fade-slide-left opacity-0">
          <div className="text-5xl font-extralight">I&apos;m a full stack software engineer</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
