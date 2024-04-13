'use server'

import { NextRequest } from "next/server";
import { logger } from "./logger"

export async function logRequest(request: NextRequest) {
	const method = request.method.toUpperCase();
	const path = request.nextUrl.pathname;
	logger.info(`${method} :: ${path}`);
}
