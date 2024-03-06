import { NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);

  const searchText = searchParams.get("q");
  const res = await fetch(
    BASE_URL +
      "?q=" +
      searchText +
      "?language=en&limit=6&session_token=f2ba73bd-2f41-4924-99c5-b038b34fc716&country=US" +
      "&access_token=" +
      process.env.MAPBOX_ACCESS_TOKEN,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const searchResult = await res.json();
  return NextResponse.json(searchResult);
}
