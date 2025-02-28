import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET /api/tasks
export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ tasks });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/tasks
export async function POST(request) {
  try {
    const data = await request.json(); // Ici, on utilise l'objet Request pour lire le corps
    if (!data.title) {
      return NextResponse.json(
        { error: "Le champ 'title' est requis." },
        { status: 400 },
      );
    }
    const newTask = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
