import Link from 'next/link';

export default () => {
    return (
        <div>
            <Link href="/option-1/[slug].html" as="/option-1/article-slug.html">
                <a>Option 1</a>
            </Link>
            <Link href="/option-2/[slug]" as="/option-2/article-slug.html">
                <a>Option 2</a>
            </Link>
        </div>
    );
};
