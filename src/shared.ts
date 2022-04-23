export const splitText = async (text: TextNode, splitType: string)=>{
  console.log(text);
  console.log(splitType);

  const font = text.fontName as FontName
  await figma.loadFontAsync(font)
  
  const texts = []

  if(splitType == "word"){
    texts.push(...text.characters.split(' '))
  }

  console.log(texts);
  
  const emptyText = text.clone()
  emptyText.deleteCharacters(0,emptyText.characters.length)
  emptyText.textAutoResize = "WIDTH_AND_HEIGHT"
  
  // compute width of a spacew
  const space = emptyText.clone()
  space.insertCharacters(0, 'i')
  const gap = space.width
  space.remove()
  
  const baseX = text.x + text.width + (text.width*0.1)
  let offsetX = baseX
  let offsetY = text.y
  const maxWidth = text.width
  
  const nodes = texts.map((chars,index)=>{
    const text: TextNode = emptyText.clone()
    text.insertCharacters(0,chars)

    if(offsetX + text.width >= baseX + maxWidth){
      offsetX = baseX
      offsetY += text.height
    }
    text.x = offsetX
    text.y = offsetY
    text.name = `${index} - ${text.characters}`
    offsetX += text.width + gap
    return text
  })

  const group = figma.group(nodes, figma.currentPage)
  group.name = "Splitted text"
  group.expanded = false

  emptyText.remove()
  // text.remove()

}