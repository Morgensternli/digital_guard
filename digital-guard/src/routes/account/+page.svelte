<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  let { data, filterByWatchlist = false } = $props();

  //let movies = $derived(data.movies);

  let movies = $derived.by(() => {
    if (filterByWatchlist) {
      let moviesFiltered = data.movies.filter((movie) => movie.watchlist);
      return moviesFiltered;
    }
    return data.movies;
  });
</script>


<div>
  <a href="/movies/create" class="btn btn-primary">Add New Movie</a>
</div>
<!-- See https://getbootstrap.com/docs/5.0/forms/checks-radios/ -->
<div class="form-check mt-3">
  <input
    class="form-check-input"
    type="checkbox"
    id="filter"
    bind:checked={filterByWatchlist}
  />
  <label class="form-check-label" for="filter">
    Show only movies on watchlist
  </label>
</div>
<div class="row mt-3">
  {#each movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard {movie}></MovieCard>
    </div>
  {/each}
</div>
