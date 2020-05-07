// mjs-file is the standard file to use, when implementing modules in javascript from Node

import Course from '../classes/courseClass.js';

// This class takes an object and makes it a new instance of the class Courses.
export function formatCourses(courses){
    let allCourses = [];

    for(let i=0; i< courses.length; i++){

        var courseObject = new Course();

        // Extend merges 2 objects into the first defined, so in this case courses[i] gets merged into courseObject
        $.extend(courseObject, courses[i]);
        allCourses.push(courseObject)
    }
    return allCourses;
}
