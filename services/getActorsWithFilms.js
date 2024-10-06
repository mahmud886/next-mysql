import {query} from "@/db";

export const getActorsWithFilms = async () => {
  try {
    const sql = `
      SELECT a.actor_id, a.first_name, a.last_name, f.title
      FROM actor a
      JOIN film_actor fa ON a.actor_id = fa.actor_id
      JOIN film f ON fa.film_id = f.film_id
      ORDER BY a.first_name, a.last_name
      LIMIT 10`;
    return await query(sql);
  } catch (error) {
    console.error("Error fetching actors:", error);
    throw error;
  }
}