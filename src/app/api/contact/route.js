import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    console.log("API Contact - Iniciando...");
    
    const body = await request.json();
    console.log("Body recibido:", body);
    
    const { name, email, message } = body;

    // Validación básica en backend
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      console.log("Campos requeridos vacíos");
      return Response.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      console.log("Mensaje muy corto");
      return Response.json(
        { error: "El mensaje debe tener al menos 10 caracteres" },
        { status: 400 }
      );
    }

    // Guardar en la base de datos
    console.log("Intentando guardar en BD...");
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      },
    });

    console.log("Contacto guardado:", contact.id);
    return Response.json(
      { success: true, id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error en API Contact:", error.message);
    console.error("Stack:", error.stack);
    return Response.json(
      { error: error.message || "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
