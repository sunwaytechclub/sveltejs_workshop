<script>
  import FancyButton from "./components/Fancybutton.svelte";
  let label = "Add counter value!";
  let value = 0;

  function add() {
    value += 1;
  }
</script>

<style>
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="center">
  <h1>{value}</h1>
  <FancyButton {label} callback={add} />
</div>
