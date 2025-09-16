import { useEffect } from 'react';

function useMetaTags(title, description, imageUrl) {
    useEffect(() => {
        // Título da página
        if (title) {
            document.title = title;
        }

        // Função para criar ou atualizar uma meta tag
        const setMetaTag = (attr, value) => {
            let element = document.querySelector(`meta[name="${attr}"], meta[property="${attr}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', attr); // Para tags como 'description'
                element.setAttribute('property', attr); // Para tags como 'og:title'
                document.head.appendChild(element);
            }
            element.setAttribute('content', value);
        };

        // Tags principais de SEO e Open Graph (para Facebook, LinkedIn, etc.)
        if (description) {
            setMetaTag('description', description);
            setMetaTag('og:description', description);
        }
        if (title) {
            setMetaTag('og:title', title);
        }
        if (imageUrl) {
            setMetaTag('og:image', imageUrl);
        }

        // Tags para o Twitter Card
        setMetaTag('twitter:card', 'summary_large_image');
        if (title) {
            setMetaTag('twitter:title', title);
        }
        if (description) {
            setMetaTag('twitter:description', description);
        }
        if (imageUrl) {
            setMetaTag('twitter:image', imageUrl);
        }

    }, [title, description, imageUrl]);
}

export default useMetaTags;