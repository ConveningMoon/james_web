import { Request, Response } from "express" ;
import { comparePasswords, hashPassword } from "../services/password.service";
//import prisma from '../models/user';
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../services/auth.service";

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, name } = req.body;

    try {
        if (!email) {
            res.status(400).json({ message: "The email is missing." });
            return;
        }
        if (!password) {
            res.status(400).json({ message: "The password is missing." });
            return;
        }
        const hashedPassword = await hashPassword(password);
        console.log("The hashed password is: ", hashedPassword);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        })

        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (error: any) {
        if (error?.code === 'P2002' && error?.meta?.target?.includes('email')) {
            res.status(400).json({ message: "This email already exists." });
        }
        console.log(error);
        res.status(500).json({ error: 'Something went wrong with the register :(' });
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        if (!email) {
            res.status(400).json({ message: "The email is missing." });
            return;
        }
        if (!password) {
            res.status(400).json({ message: "The password is missing." });
            return;
        }
        const user = await prisma.user.findUnique({ where: {email} })

        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return
        }

        const passwordMatch = await comparePasswords(password, user.password); //Compare the passwords
        if(!passwordMatch) {
            res.status(401).json({ error: "The user and the password do not match" });
            return;
        }

        const token = generateToken(user)
        res.status(200).json({ token })
    } catch (error: any) {
        console.log('Error with the Login: ', error);
    }
}