import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = await axios.get(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=en-US"
    );

    if (response.status === 200) {
      return new NextResponse(JSON.stringify(response.data), {
        headers: { "content-type": "application/json" },
      });
    } else {
      return new NextResponse("Error internal server", {
        status: 500,
      });
    }
  } catch (error) {
    console.error("Error agents route", error);
    return new NextResponse("Error server", {
      status: 500,
    });
  }
}
