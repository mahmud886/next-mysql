import {query} from "@/db";

export const getActors = async (firstName) => {
  try {
    const sql = `SELECT actor_id, first_name, last_name 
                        FROM actor 
                        WHERE first_name = ?
                        `;
    return await query(sql, [firstName]);
  } catch (error) {
    console.error("Error fetching actors:", error);
    throw error;
  }
};