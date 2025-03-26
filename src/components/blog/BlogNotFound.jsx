import { Link } from 'react-router-dom';

const BlogNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-4">
            <h1 className="text-4xl font-bold mb-4">The Blog Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                Sorry, the post you are looking for could not be found.
                <br />It might have been removed, renamed, or never existed.
            </p>
            <Link to="/blogs" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Back to Blogs
            </Link>
        </div>
    );
};

export default BlogNotFound;