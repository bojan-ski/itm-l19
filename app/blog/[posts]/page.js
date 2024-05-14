import Link from "next/link";
import posts from "../../../data/posts";

const BlogPosts = ({ params }) => {
  const postDetails = posts.find(post => post.id == +params.posts)

  if (!postDetails) return <h1>The post you are searching does not exist</h1>

  const { title, description } = postDetails

  return (
    <>
      <h1>{title}</h1>

      <div className="post">
        <img src="https://placehold.co/600x400.png" alt="post-img" />

        <section>
          <p>
            {description}
          </p>
          
          <Link href='/blog' className="btn-back">
            Back
          </Link>
        </section>
      </div>
    </>
  )
}

export default BlogPosts