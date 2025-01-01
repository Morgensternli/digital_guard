<script>
  export let data;
  let movie = data.movie;
  import ".../styles.css";
</script>

<a href="/movies">Back</a>

<h1>{movie.title}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={movie.poster} alt="" />
  </div>

  <div class="col">
    <p>Jahr: {movie.year}</p>
    <p>Dauer: {movie.length}</p>
    <p>Cast:</p>
    <ul>
      {#each movie.actors as actor}
        <li>{actor}</li>
      {/each}
    </ul>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={movie._id}>
      <button class="btn btn-danger">Delete Movie</button>
    </form>
  </div>
</div>
