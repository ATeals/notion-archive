import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATE_SECRET) return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    if (!tag) return NextResponse.json({ message: "no Tag" }, { status: 401 });

    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now(), message: "새로고침 성공" });
}
