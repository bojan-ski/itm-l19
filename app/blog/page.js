import Link from "next/link"
import posts from "../../data/posts"

const Blog = () => {
  return (
    <>
      <h1>
        Blog Page - Posts
      </h1>

      <div className="posts">
        {posts.map(post => {
          const { id, title } = post

          return <div key={id} className="card">
            <img src="https://via.placeholder.com/300x200" alt="post-img" />
            <h4>{title}</h4>
            <Link href={`/blog/${id}`}>
              Read More
            </Link>
          </div>
        })}
      </div>
    </>
  )
}

export default Blog