import { mockedSongs as songs } from "@/lib/songs/songs";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const song = songs.find((s) => s.id === Number(params.id));

  if (song) {
    return new Response(JSON.stringify(song), {
      status: 200,
    });
  }

  return new Response("Song not found", {
    status: 404,
  });
}
