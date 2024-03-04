import { Request, Response } from "express"
import { connect } from "../database";
import { Course } from "../interface/course";

class CourseControllers {
    public async getCourses(req: Request, res: Response): Promise<Response> {
        const conn = await connect();
        const courses = await conn.query('SELECT * FROM courses');
        return res.json(courses[0])
    }

    public async intoCourse(req: Request, res: Response): Promise<Response> {
        const newCourse: Course = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO courses SET ?', [newCourse]);
        return res.json("Course Created")
    }

    public async updateCourse(req: Request, res: Response): Promise<Response> {
        const { id }= req.params;
        const updateCourse: Course = req.body;
        const conn = await connect();
        await conn.query('UPDATE courses set ? WHERE id = ?', [updateCourse, id]);
        return res.json(`Course whith id= ${id} update`)
    }

    public async deleteCourse(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const conn = await connect();
        await conn.query('DELETE FROM courses WHERE id = ?', [id]);
        return res.json("Course Delete")
    }

    public async getOneCourse(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const conn = await connect();
        const course = await conn.query('SELECT * FROM courses WHERE id = ?', [id]);
        return res.json(course[0]);
    }
}

export const courseControllers = new CourseControllers();