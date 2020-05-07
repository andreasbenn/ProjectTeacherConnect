import Teacher from "../classes/teacherClass.js";

// This class takes an object and makes it a new instance of the class Teacher.
export function formatTeachers(teachers){
    let allTeachers = [];

    for(let i=0; i< teachers.length; i++){

        var teacherObject = new Teacher();

        // Extend merges 2 objects into the first defined, so in this case teachers[i] gets merged into teacherObject
        $.extend(teacherObject, teachers[i]);
        allTeachers.push(teacherObject)
    }
    return allTeachers;
}