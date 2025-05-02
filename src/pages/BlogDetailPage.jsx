import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import blogs from '../utils/loadBlogs';
import './BlogDetailPage.css';
import Navbar from "../components/NavBar";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail-parent">
      <Navbar />
      <div className="blog-detail-container">
        <h1>{blog.frontmatter.title}</h1>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}
