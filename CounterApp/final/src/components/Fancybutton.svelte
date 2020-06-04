<script>
  export let label = "Click me";
  export let callback = () => console.log("hi");
</script>

<style>
  button {
    cursor: pointer;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>

<button on:click={callback}>{label}</button>
