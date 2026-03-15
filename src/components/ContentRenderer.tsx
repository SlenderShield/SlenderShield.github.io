import type { ContentBlock } from '../types/content';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="content-renderer">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <p key={index} className="cr-text" dangerouslySetInnerHTML={{ __html: block.value }} />
          
          case 'image':
            return (
              <figure key={index} className="media-block">
                <img src={block.value} alt={block.caption || 'Project asset'} loading="lazy" />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            )
            
          case 'code':
            return (
              <div key={index} className="code-block">
                {block.language && <span className="cr-code-lang">{block.language}</span>}
                <pre>
                  <code>{block.value}</code>
                </pre>
              </div>
            )
            
          case 'youtube':
            return (
              <div key={index} className="cr-youtube">
                <iframe
                  src={`https://www.youtube.com/embed/${block.value}`}
                  title={block.caption || "YouTube video player"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {block.caption && <p className="cr-youtube-caption">{block.caption}</p>}
              </div>
            )
            
          case 'quote':
            return (
              <blockquote key={index} className="quote-block">
                <p>{block.value}</p>
                {block.caption && <cite>— {block.caption}</cite>}
              </blockquote>
            )
            
          case 'mermaid':
            return (
              <div key={index} className="mermaid-block">
                <p className="cr-mermaid-placeholder">
                  [ Architecture Diagram: {block.value} ]
                </p>
                {block.caption && <p className="cr-mermaid-caption">{block.caption}</p>}
              </div>
            )
            
          case 'link':
            return (
              <div key={index} className="cr-link">
                <a href={block.href || '#'} target="_blank" rel="noreferrer">
                  {block.value} ↗
                </a>
              </div>
            )
            
          default:
            return null;
        }
      })}
    </div>
  )
}
