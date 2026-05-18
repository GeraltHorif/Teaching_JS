//----------Task_5----------

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {

    const mainBlock = document.createElement('div');
    mainBlock.classList.add('course-item');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('course-title');
    titleBlock.textContent = `Назва: ${course.title}`;

    const monthBlock = document.createElement('div');
    monthBlock.classList.add('course-month');
    monthBlock.textContent = `Місяців: ${course.monthDuration}`;

    const hourBlock = document.createElement('div');
    hourBlock.classList.add('course-hour');
    hourBlock.textContent = `Годин: ${course.hourDuration}`;

    const modulesBlock = document.createElement('div');
    modulesBlock.classList.add('course-modules');

    const ulElement = document.createElement('ul');

    for (const moduleName of course.modules) {
        const liElement = document.createElement('li');
        liElement.textContent = moduleName;
        ulElement.appendChild(liElement);
    }

    modulesBlock.appendChild(ulElement);
    mainBlock.appendChild(titleBlock);
    mainBlock.appendChild(monthBlock);
    mainBlock.appendChild(hourBlock);
    mainBlock.appendChild(modulesBlock);

    mainBlock.style.border = '2px solid #333';
    mainBlock.style.margin = '20px 0';
    mainBlock.style.padding = '15px';
    titleBlock.style.fontWeight = 'bold';
    titleBlock.style.fontSize = '20px';
    
    document.body.appendChild(mainBlock);
}
