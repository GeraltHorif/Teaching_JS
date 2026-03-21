
const createParagraph = (text) => {
    const p = document.createElement('p');
    p.innerText = text;
    document.body.appendChild(p);
};

createParagraph("«Зло — це зло, Стреґоборе. Менше, більше, середнє — все одно, пропорції умовні, а межі розмиті».");
createParagraph("«Люди люблять вигадувати монстрів і страхіття, тоді вони самі собі здаються менш потворними»");






