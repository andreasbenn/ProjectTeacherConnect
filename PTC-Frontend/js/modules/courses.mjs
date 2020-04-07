import Course from '../classes/courseClass.js';
//mjs-file is the standard file to use, when implementing modules in javascript from Node
//This function goes through the inputted array, and changes alle the index's to an instance of the class User.
export function formatCourses(courses){
    let allCourses = [];
    for(let i=0; i< courses.length; i++){
        var courseObject = new Course();
        $.extend(courseObject, courses[i]);
        allCourses.push(courseObject)
    }
    return allCourses;
}
export function formatCourse(course) {
    var courseObject = new Course();
    $.extend(courseObject, course);
    return courseObject;
}