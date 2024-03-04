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
exports.courseControllers = void 0;
const database_1 = require("../database");
class CourseControllers {
    getCourses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const courses = yield conn.query('SELECT * FROM courses');
            return res.json(courses[0]);
        });
    }
    intoCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCourse = req.body;
            const conn = yield (0, database_1.connect)();
            yield conn.query('INSERT INTO courses SET ?', [newCourse]);
            return res.json("Course Created");
        });
    }
    updateCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateCourse = req.body;
            const conn = yield (0, database_1.connect)();
            yield conn.query('UPDATE courses set ? WHERE id = ?', [updateCourse, id]);
            return res.json(`Course whith id= ${id} update`);
        });
    }
    deleteCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield (0, database_1.connect)();
            yield conn.query('DELETE FROM courses WHERE id = ?', [id]);
            return res.json("Course Delete");
        });
    }
    getOneCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield (0, database_1.connect)();
            const course = yield conn.query('SELECT * FROM courses WHERE id = ?', [id]);
            return res.json(course[0]);
        });
    }
}
exports.courseControllers = new CourseControllers();
