//-----------Task_3----------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const block = document.createElement('div');

    block.textContent = `Course: ${course.title} - Duration: ${course.monthDuration} months`;

    block.style.margin = '10px 0';
    block.style.margin = '10px';
    block.style.border = '1px solid gray';

    document.body.appendChild(block);
}


