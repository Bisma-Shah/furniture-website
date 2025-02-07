import BlogSection from "../components/blogSection";

const Blog = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="flex justify-center mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          LATEST BLOG
        </h1>
      </div>

      {/* Blog Sections */}
      <div className="flex justify-center gap-8 py-16 px-4 sm:px-8 lg:px-24">
        <BlogSection
          image="/blog1.jpg"
          title="Look even slightly believable.If you are"
          discription="Alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          button="Read More"
        />
        <BlogSection
          image="/blog2.jpg"
          title="Anything embarrassing hidden in the middle"
          discription="Alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          button="Read More"
        />
        <BlogSection
          image="/blog3.jpg"
          title="Molestias magni natus dolores odio commodi. Quaerat!"
          discription="Alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          button="Read More"
        />
      </div>
    </div>
  );
};

export default Blog;
