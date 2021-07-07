<script>
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

<button on:click={handleClick}>Create a Shape</button>