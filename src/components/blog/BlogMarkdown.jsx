import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { BLOGS } from "@/lib/Constants"; // Assuming your constants are in this path
import { useParams } from "react-router-dom";
import BlogNotFound from "@/components/blog/BlogNotFound";
import { useEffect } from "react";

const BlogMarkdown = () => {
    const { slug } = useParams();

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
    }, []);

    const blog = BLOGS.find(blog => blog.slug === slug);

    if (!blog) {
        return <BlogNotFound />;
    }

    return (
        <div className="animate-fade-in prose prose-lg md:prose-xl prose-slate dark:prose-invert leading-relaxed mx-auto">
            <h1>{blog.title}</h1>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div dangerouslySetInnerHTML={{ __html: children }} />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {blog.content.join('\n')}
            </ReactMarkdown>
        </div>
    );
}

export default BlogMarkdown;