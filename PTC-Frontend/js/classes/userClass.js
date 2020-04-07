export default class User {
    constructor (id, StudentID, fullName, email, password, phoneNumber, address, program){
        this._id = id;
        this.StudentID = StudentID;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.program = program;
    }
}
