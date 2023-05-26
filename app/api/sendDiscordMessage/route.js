import { NextResponse } from "next/server";

const url = "https://discordapp.com/api/webhooks/770724245214986261/qQTsNZsFXoiRopoc6EB3p0Ixt7427RkLd-BB_Cf4xKcWoOhFmvV1__2wJu590gkEAwmz";

export async function GET(request) {
  console.log(request.ip);
  console.log(request.headers.get("x-forwarded-for").split(":")[3]);
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");
  const date = new Date().toLocaleString();
  let ip = request.headers.get("x-forwarded-for").split(":")[3];

  let location = await fetch(`https://ipapi.co/${ip}/json/`);
  location = await location.json();
  console.log(location);

  const data = {
    content: `**${date}**\n${message}\n${ip}\n${location}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options);

  return NextResponse.json({ ip: request.ip });
}

function getIP(obj) {}
