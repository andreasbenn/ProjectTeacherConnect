import Teacher from "../classes/teacherClass.js";

export function formatTeachers(teachers){
    let allTeachers = [];
    for(let i=0; i< teachers.length; i++){
        var teacherObject = new Teacher();
        $.extend(teacherObject, teachers[i]);
        allTeachers.push(teacherObject)
    }
    return allTeachers;
}