"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsControllers = void 0;
const database_1 = require("../database");
class StudentsControllers {
    getStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const students = yield conn.query('SELECT * FROM students');
            return res.json(students[0]);
        });
    }
    intoStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudent = req.body;
            const conn = yield (0, database_1.connect)();
            yield conn.query('INSERT INTO students SET ?', [newStudent]);
            return res.json("Student Admitted");
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateStudent = req.body;
            const conn = yield (0, database_1.connect)();
            yield conn.query('UPDATE students set ? WHERE id = ?', [updateStudent, id]);
            return res.json(`Student whith id= ${id} update`);
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield (0, database_1.connect)();
            yield conn.query('DELETE FROM students WHERE id = ?', [id]);
            return res.json("Student Expulsed");
        });
    }
    getOneStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield (0, database_1.connect)();
            const student = yield conn.query('SELECT * FROM students WHERE id = ?', [id]);
            return res.json(student[0]);
        });
    }
}
exports.studentsControllers = new StudentsControllers();
