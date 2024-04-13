import { logger } from "@/utils/logger";

export function GET() {
	logger.info("GET req recv at `/api/health` endpoint");
	return Response.json({ message: "Health AF :)" });
}
