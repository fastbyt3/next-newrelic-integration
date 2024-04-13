import { logger } from "@/utils/logger";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

export function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const name = searchParams.get('name');

	if (name) {
		logger.info(`RECV GET req at api/hello ep with name: ${name}`);
		return Response.json({
			message: `Hello ${name}`,
		});
	}

	logger.error('Didnt recv query param name');

	return NextResponse.json({
		message: "requires name as query param",
	}, {
		status: 500,
	});
};
