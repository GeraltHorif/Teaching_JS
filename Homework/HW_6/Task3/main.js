let coursesAndDurationArray = [
{ title: 'JavaScriptComplex', monthDuration: 5 },

{ title: 'JavaComplex', monthDuration: 6 },

{ title: 'PythonComplex', monthDuration: 6 },

{ title: 'QAComplex', monthDuration: 4 },

{ title: 'FullStack', monthDuration: 7 },

{ title: 'Frontend', monthDuration: 4 },
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

let map = filteredCourses.map((course, index)=> {
    return {
    id: index + 1,
    name: course.title,
    monthDuration: course.monthDuration,
};
});
console.log(map);
