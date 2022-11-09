
export const dateFormat = (date) => {
    const d = new Date(date);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return d.toLocaleDateString('es-ES', options);
    }
    