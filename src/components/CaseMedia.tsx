import { useState } from 'react';
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
  const style = { aspectRatio: media.ratio, '--media-bg': media.bg ?? bg } as CSSProperties;
  const id = media.vimeo ? vimeoId(media.vimeo) : null;
  // Video: primero su portada con botón de reproducir; el reproductor de Vimeo se carga
  // solo al tocarlo (así la página no carga varios reproductores de una vez).
  const [playing, setPlaying] = useState(false);
  let body;
  if (id && playing) {
    body = (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&title=0&byline=0&portrait=0&dnt=1`}
        title={media.alt}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  } else if (id) {
    body = (
      <button type="button" className="case-media__play" onClick={() => setPlaying(true)}>
        {media.src && (
          <picture>
            <source srcSet={asset(media.src)} type="image/webp" />
            <img src={asset(media.fallback ?? media.src)} alt="" loading="lazy" decoding="async" />
          </picture>
        )}
        <span className="case-media__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M9 7l8 5-8 5z" />
          </svg>
        </span>
        <span className="sr-only">Reproducir video: {media.alt}</span>
      </button>
    );
  } else if (media.src) {
    const img = <img src={asset(media.fallback ?? media.src)} alt={media.alt} loading="lazy" decoding="async" />;
    body = media.fallback ? (
      <picture>
        <source srcSet={asset(media.src)} type="image/webp" />
        {img}
      </picture>
    ) : (
      img
    );
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
