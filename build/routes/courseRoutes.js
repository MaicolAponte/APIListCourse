"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseControllers_1 = require("../controllers/courseControllers");
class CoursesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', courseControllers_1.courseControllers.getCourses);
        this.router.get('/:id', courseControllers_1.courseControllers.getOneCourse);
        this.router.post('/', courseControllers_1.courseControllers.intoCourse);
        this.router.put('/:id', courseControllers_1.courseControllers.updateCourse);
        this.router.delete('/:id', courseControllers_1.courseControllers.deleteCourse);
    }
}
const courseRoutes = new CoursesRoutes();
exports.default = courseRoutes.router;
