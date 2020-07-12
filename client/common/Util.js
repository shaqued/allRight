export function getDisplayDate(dateParam) {
    const date = new Date(dateParam);
    return (`${date.getDate()} ל${getDisplayMonth(date.getMonth())}, ${date.getFullYear()}`);
}

function getDisplayMonth(month) {
    const hebrewMonths = [
        'ינואר',
        'פברואר',
        'מרץ',
        'אפריל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'ספטמבר',
        'אוקטובר',
        'נובמבר',
        'דצמבר'
    ];

    return hebrewMonths[month];
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
};

export function convertDataToImage(data) {
    const base64Flag = 'data:image/jpeg;base64,';
    return (base64Flag + arrayBufferToBase64(data));
}