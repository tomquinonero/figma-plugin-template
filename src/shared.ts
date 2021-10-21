export const splitText = async (text: TextNode, splitType: string) => {
  const font = text.fontName as FontName
  await figma.loadFontAsync(font)

  const texts = []

  const parentNode = text.parent

  if (splitType == "word") {
    texts.push(...text.characters.split(" "))
  }
  if (splitType == "letter") {
    texts.push(...text.characters.split(""))
  }

  const emptyText = text.clone()
  emptyText.deleteCharacters(0, emptyText.characters.length)
  emptyText.textAutoResize = "WIDTH_AND_HEIGHT"

  // compute width of a spacew
  const space = emptyText.clone()
  space.insertCharacters(0, "i")
  const gap = space.width
  space.remove()

  const baseX = text.x + text.width + text.width * 0.1
  let offsetX = baseX
  let offsetY = text.y
  const maxWidth = text.width

  console.log({ offsetY })

  const nodes = texts.map((chars, index) => {
    const text: TextNode = emptyText.clone()
    text.insertCharacters(0, chars)

    if (offsetX + text.width >= baseX + maxWidth) {
      offsetX = baseX
      offsetY += text.height
      console.log({ offsetY })
    }
    text.x = offsetX
    text.y = offsetY
    console.log({ offsetY })
    text.name = `${index} - ${text.characters}`
    offsetX += text.width + gap
    return text
  })

  console.log(text)
  console.log(text.relativeTransform)
  console.log(text.x)
  console.log({ offsetY })
  console.log(text.y)

  const group = figma.group(nodes, figma.currentPage)

  parentNode.appendChild(group)
  group.name = "Splitted text"
  group.expanded = false

  emptyText.remove()
}
