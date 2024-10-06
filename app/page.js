
import {getActors} from "@/services/getActors";
import {getActorsWithFilms} from "@/services/getActorsWithFilms";

export default async function Home() {
  const actors = await getActors('Scarlett')
  const actorsWithFilms = await getActorsWithFilms()

  console.log(actorsWithFilms)

  return (
    <>
      <h2>Actors List</h2>
      {actors.map((actor) => (
        <div key={actor.actor_id}>
          <h3 className='text-white'>{actor.first_name}</h3>
        </div>
      ))}
    </>
  );
}
