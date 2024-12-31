import { mockedSongs as songs } from "@/lib/songs/songs";

export async function GET() {
  return Response.json({ songs });
}
