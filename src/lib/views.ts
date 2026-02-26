import { db } from "./db";

type GeoJSONPoint = {
  type: string;
  coordinates: number[];
};

export async function getZipGeoById(id: string) {
  // Use a raw query against the view to avoid relying on generated Prisma view delegates.
  const rows: any[] = await db.$queryRawUnsafe(`SELECT zip_code, latitude, longitude, location_geom_json FROM zip_geo_view WHERE zip_code = '${String(id).replace(/'/g, "''")}' LIMIT 1`);
  const rec = rows?.[0];
  if (!rec) return null;
  let geom: GeoJSONPoint | null = null;
  try {
    if (rec.location_geom_json) geom = JSON.parse(rec.location_geom_json as string) as GeoJSONPoint;
  } catch (e) {
    geom = null;
  }
  return {
    zipCode: rec.zip_code,
    latitude: rec.latitude ?? null,
    longitude: rec.longitude ?? null,
    location: geom,
  };
}

export async function getUserPreferenceByUserId(userId: string) {
  const rows: any[] = await db.$queryRawUnsafe(`SELECT * FROM user_preference_view WHERE user_id = '${String(userId).replace(/'/g, "''")}' LIMIT 1`);
  const rec = rows?.[0];
  if (!rec) return null;
  return {
    userId: rec.user_id,
    zipGeoId: rec.zip_geo_id ?? null,
    defaultRadiusMiles: rec.default_radius_miles ?? null,
    skillsSummary: rec.skills_summary ?? null,
    resumeVectorText: rec.resume_vector_text ?? null,
    jobAlertEnabled: rec.job_alert_enabled ?? null,
    createdAt: rec.created_at,
    updatedAt: rec.updated_at,
  };
}

export async function listAiEmbeddings(namespace?: string, key?: string) {
  const whereClauses: string[] = [];
  if (namespace) whereClauses.push(`namespace = '${String(namespace).replace(/'/g, "''")}'`);
  if (key) whereClauses.push(`key = '${String(key).replace(/'/g, "''")}'`);
  const where = whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : '';
  const rows: any[] = await db.$queryRawUnsafe(`SELECT id, namespace, key, text, embedding_text, created_at FROM ai_embedding_store_view ${where}`);
  return rows.map((r) => ({
    id: r.id,
    namespace: r.namespace,
    key: r.key,
    text: r.text,
    embeddingText: r.embedding_text ?? null,
    createdAt: r.created_at,
  }));
}

export default {};
