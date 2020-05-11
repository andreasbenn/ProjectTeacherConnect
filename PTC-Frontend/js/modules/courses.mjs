// mjs-file is the standard file to use, when implementing modules in javascript from Node
// (n.d.). ECMAScript Modules | Node.js V14.2.0 Documentation. Node.js. from https://nodejs.org/api/esm.html
import Course from '../classes/courseClass.js';

// This class takes an object and makes it a new instance of the class Courses through extend.
// (n.d.). JQuery.extend() | JQuery API Documentation. jQuery. Retrieved from https://api.jquery.com/jQuery.extend/
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
