"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsControllers_1 = require("../controllers/studentsControllers");
class StudentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentsControllers_1.studentsControllers.getStudents);
        this.router.post('/', studentsControllers_1.studentsControllers.intoStudent);
        this.router.get('/:id', studentsControllers_1.studentsControllers.getOneStudent);
        this.router.put('/:id', studentsControllers_1.studentsControllers.updateStudent);
        this.router.delete('/:id', studentsControllers_1.studentsControllers.deleteStudent);
    }
}
const studentsRoutes = new StudentsRoutes();
exports.default = studentsRoutes.router;
