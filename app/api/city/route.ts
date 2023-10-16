import { getCityFromCoords } from "@/services/server";

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Wrong body" }, { status: 400 });
  }

  const { lat, lon } = body;

  if (!lat || !lon) {
    return Response.json({ error: "Missing lat or lon" }, { status: 400 });
  }

  if (typeof lat !== "number" || typeof lon !== "number") {
    return Response.json(
      { error: "lat and lon must be numbers" },
      { status: 400 },
    );
  }

  try {
    const res = await getCityFromCoords(lat, lon);
    return Response.json(res);
  } catch {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
