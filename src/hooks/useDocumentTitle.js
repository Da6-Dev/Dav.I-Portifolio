// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';

function useDocumentTitle(title) {
    useEffect(() => {
        // Esta linha atualiza diretamente o título do documento HTML
        document.title = title;
    }, [title]); // O efeito é executado sempre que o título muda
}

export default useDocumentTitle;