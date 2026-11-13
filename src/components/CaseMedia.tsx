import type { CSSProperties } from 'react';
import type { ProjectMedia } from '../data/content';
import { asset } from '../lib/asset';

/** ID de Vimeo desde un número o un enlace (vimeo.com/123456789). */
function vimeoId(value: string): string | null {
  const match = value.match(/(\d{6,})/);
  return match ? match[1] : null;
}

/**
 * Una pieza de un caso: imagen, video de Vimeo (en bucle y sin sonido) o, mientras
 * no se cargue, un espacio «pendiente» con la misma proporción y el fondo del proyecto.
 */
export function CaseMedia({ media, bg }: { media: ProjectMedia; bg?: string }) {
  const style = { aspectRatio: media.ratio, '--media-bg': bg } as CSSProperties;
  const id = media.vimeo ? vimeoId(media.vimeo) : null;
  let body;
  if (id) {
    body = (
      <iframe
        src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1`}
        title={media.alt}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
      />
    );
  } else if (media.src) {
    body = <img src={asset(media.src)} alt={media.alt} loading="lazy" decoding="async" />;
  } else {
    body = (
      <span className="case-media__pending" role="img" aria-label={`${media.alt} (imagen pendiente)`}>
        <span>{media.kind === 'video' ? 'Video pendiente' : 'Imagen pendiente'}</span>
      </span>
    );
  }
  return (
    <figure className={`case-media${media.kind === 'video' ? ' case-media--video' : ''}`}>
      <div className="case-media__frame" style={style}>
        {body}
      </div>
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}
