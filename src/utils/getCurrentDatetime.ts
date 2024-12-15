export default function getCurrentDatetime() {
    return new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Atlantic/Canary',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date());
}