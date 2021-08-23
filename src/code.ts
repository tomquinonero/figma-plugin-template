figma.parameters.on('input', (parameters: ParameterValues, currentKey: string, result: SuggestionResults) => {
  const currentValue = parameters[currentKey]
  switch (currentKey) {
    case 'type':
      const types = ['sentence', 'word', 'letter']
      result.setSuggestions(types.filter(s => s.includes(currentValue)))
      break
    default:
      return
  }
})

figma.on('run', (event: RunEvent) => {
  if (event.parameters) {
    console.log(event.parameters);
    
  }
})