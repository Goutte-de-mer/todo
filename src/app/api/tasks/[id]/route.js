// app/api/tasks/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

// PUT /api/tasks/:id
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { completed } = await request.json();

    if (typeof completed !== "boolean") {
      return NextResponse.json(
        { error: "Le champ 'completed' doit être un booléen." },
        { status: 400 },
      );
    }

    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: { completed },
    });

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/tasks/:id
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const deletedTask = await prisma.task.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(deletedTask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
