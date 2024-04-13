import { NextRequest, NextResponse } from "next/server";
import { logRequest } from "./utils/logRequestAction";

export function middleware(request: NextRequest) {
	logRequest(request);
}
