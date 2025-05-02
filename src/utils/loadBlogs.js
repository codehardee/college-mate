const markdownFiles = import.meta.glob('../content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const blogs = Object.entries(markdownFiles).map(([path, content]) => {
  const slug = path.split('/').pop().replace('.md', '');

  let frontmatter = {};
  let markdown = content;

  if (content.startsWith('---')) {
    const parts = content.split('---');

    if (parts.length >= 3) {
      const frontmatterRaw = parts[1].trim();
      markdown = parts.slice(2).join('---').trim();

      frontmatterRaw.split('\n').forEach((line) => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length > 0) {
          frontmatter[key.trim()] = rest.join(':').trim();
        }
      });
    }
  }

  return {
    slug,
    frontmatter,
    content: markdown,
  };
});

export default blogs;
