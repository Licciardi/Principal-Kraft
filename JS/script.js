function toggleComment(commentId) {
            const comment = document.querySelector(`#${commentId}`);
            if (comment.style.height === 'auto') {
                comment.style.height = '100px'; // Defina o tamanho fixo desejado
            } else {
                comment.style.height = 'auto'; // Expandir para o tamanho total
            }
        }