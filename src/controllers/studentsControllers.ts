import { Request, Response } from "express"
import { Student } from "../interface/student";
import { connect } from "../database";

class StudentsControllers {
    public async getStudents(req: Request, res: Response): Promise<Response> {
        const conn = await connect();
        const students = await conn.query('SELECT * FROM students');
        return res.json(students[0])
    }

    public async intoStudent(req: Request, res: Response): Promise<Response> {
        const newStudent: Student = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO students SET ?', [newStudent]);
        return res.json("Student Admitted")
    }

    public async updateStudent(req: Request, res: Response): Promise<Response> {
        const { id }= req.params;
        const updateStudent: Student = req.body;
        const conn = await connect();
        await conn.query('UPDATE students set ? WHERE id = ?', [updateStudent, id]);
        return res.json(`Student whith id= ${id} update`)
    }

    public async deleteStudent(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const conn = await connect();
        await conn.query('DELETE FROM students WHERE id = ?', [id]);
        return res.json("Student Expulsed")
    }

    public async getOneStudent(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const conn = await connect();
        const student = await conn.query('SELECT * FROM students WHERE id = ?', [id]);
        return res.json(student[0]);
    }
}

export const studentsControllers = new StudentsControllers();