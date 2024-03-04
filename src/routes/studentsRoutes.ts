import { Router } from "express";
import { studentsControllers } from "../controllers/studentsControllers";

class StudentsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config ():void {
        this.router.get('/', studentsControllers.getStudents);
        this.router.post('/', studentsControllers.intoStudent);
        this.router.get('/:id', studentsControllers.getOneStudent);
        this.router.put('/:id', studentsControllers.updateStudent);
        this.router.delete('/:id', studentsControllers.deleteStudent);
    }
}

const studentsRoutes = new StudentsRoutes(); 
export default studentsRoutes.router;