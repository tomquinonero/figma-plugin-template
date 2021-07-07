figma.showUI(__html__, { width: 800, height: 600 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "createShape") {
    let rectangle = figma.createRectangle();
    rectangle.resize(400, 400);
    rectangle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 1 } }];
    figma.viewport.scrollAndZoomIntoView([rectangle]);
    figma.closePlugin();
  }
};
