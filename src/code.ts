import { splitText } from "./shared"

figma.parameters.on('input', (parameters: ParameterValues, currentKey: string, result: SuggestionResults) => {
  const currentValue = parameters[currentKey]
  switch (currentKey) {
    case 'type':
      const types = ['word', 'letter']
      result.setSuggestions(types.filter(s => s.includes(currentValue)))
      break
    default:
      return
  }
})

figma.on('run', async (event: RunEvent) => {
  if (event.parameters) {
    const selection = figma.currentPage.selection[0]
    const {type} = event.parameters
    
    if(selection && selection.type == "TEXT"){

      await splitText(selection, type)
      
    }else{
      figma.notify("You need to select a text layer")
    }
    
  }

  figma.closePlugin()
})