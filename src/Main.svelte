<script lang="ts">
  import './main.scss';

  let test: string = "test"

  const handleClick = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "createShape",
        },
      },
      "*"
    )
  }
</script>
{test}
<button on:click={handleClick}>Create a Shape</button>

<style lang="scss">
  
  button{
    background: teal;
    border: none;
    padding: 1.2rem 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }
</style>