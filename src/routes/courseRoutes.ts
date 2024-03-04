import { Router } from "express";
import { courseControllers} from "../controllers/courseControllers"

class CoursesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config ():void {
        this.router.get('/', courseControllers.getCourses);
        this.router.get('/:id', courseControllers.getOneCourse);
        this.router.post('/', courseControllers.intoCourse);
        this.router.put('/:id', courseControllers.updateCourse);
        this.router.delete('/:id', courseControllers.deleteCourse);
    }
}

const courseRoutes = new CoursesRoutes(); 
export default courseRoutes.router;