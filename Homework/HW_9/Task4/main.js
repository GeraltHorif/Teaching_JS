//-----------Task_4----------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const blockDiv = document.createElement('div');
    blockDiv.classList.add('item');

    const headingH1 = document.createElement('h1');
    headingH1.classList.add('heading');
    headingH1.textContent = course.title;

    const descriptP = document.createElement('p');
    descriptP.classList.add('description');
    descriptP.textContent = `Тривалість: ${course.monthDuration} місяців`;

    blockDiv.appendChild(headingH1);
    blockDiv.appendChild(descriptP);

    document.body.appendChild(blockDiv);
}
