import { NextResponse } from "next/server";

const url = "https://discordapp.com/api/webhooks/770724245214986261/qQTsNZsFXoiRopoc6EB3p0Ixt7427RkLd-BB_Cf4xKcWoOhFmvV1__2wJu590gkEAwmz";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");
  const date = new Date().toLocaleString();

  const data = {
    content: `**${date}**\n${message}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options);

  const clientIPs = [request.headers.get("cf-connecting-ip"), request.headers.get("x-forwarded-for"), request.headers.get("x-real-ip")];
  let clientIP = clientIPs[2];

  let ipLocation = await fetch(`https://ipapi.co/${clientIP}/json/`);
  ipLocation = await ipLocation.json();

  // get
  console.log(clientIPs);

  return NextResponse.json({ message: ipLocation });
}
