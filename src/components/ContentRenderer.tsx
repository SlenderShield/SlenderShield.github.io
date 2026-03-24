import type { ContentBlock } from '../types/content';
import {
  sanitizeHtml,
  sanitizeUrl,
  sanitizeYouTubeId,
} from '../utils/sanitize';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="content-renderer">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text': {
            const cleanHtml = sanitizeHtml(block.value);
            return (
              <p
                key={index}
                className="cr-text"
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
              />
            );
          }

          case 'image': {
            const imageSrc = sanitizeUrl(block.value);
            if (!imageSrc) return null;
            
            // Add responsive srcset for Unsplash images
            let srcSet = ''
            if (imageSrc.includes('unsplash.com')) {
              srcSet = `${imageSrc}?w=400 400w, ${imageSrc}?w=800 800w, ${imageSrc}?w=1200 1200w`
            }
            
            return (
              <figure key={index} className="media-block">
                <img
                  src={imageSrc}
                  srcSet={srcSet}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  alt={block.caption || 'Project asset'}
                  loading="lazy"
                />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }

          case 'code':
            return (
              <div key={index} className="code-block">
                {block.language && (
                  <span className="cr-code-lang">{block.language}</span>
                )}
                <pre>
                  <code>{block.value}</code>
                </pre>
              </div>
            );

          case 'youtube': {
            const videoId = sanitizeYouTubeId(block.value);
            if (!videoId) return null;
            return (
              <div key={index} className="cr-youtube">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={block.caption || 'YouTube video player'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {block.caption && (
                  <p className="cr-youtube-caption">{block.caption}</p>
                )}
              </div>
            );
          }

          case 'quote':
            return (
              <blockquote key={index} className="quote-block">
                <p>{block.value}</p>
                {block.caption && <cite>— {block.caption}</cite>}
              </blockquote>
            );

          case 'mermaid':
            return (
              <div key={index} className="mermaid-block">
                <p className="cr-mermaid-placeholder">
                  [ Architecture Diagram: {block.value} ]
                </p>
                {block.caption && (
                  <p className="cr-mermaid-caption">{block.caption}</p>
                )}
              </div>
            );

          case 'link': {
            const safeHref = sanitizeUrl(block.href);
            if (!safeHref) return null;
            return (
              <div key={index} className="cr-link">
                <a href={safeHref} target="_blank" rel="noreferrer noopener">
                  {block.value} ↗
                </a>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
