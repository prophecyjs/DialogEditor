import { ContextMenu } from './contextmenu'

class Editor {
  constructor () {
    this.contextMenu = new ContextMenu('.editor-background')
    this.createMenu()
  }

  createMenu () {
    /**
     * Create the contextmenu for the editor.
     */
    this.contextMenu.add('Text', () => { console.log('Text clicked')})
      .add('Node', () => { console.log('Node clicked')})
      .add('Choice', () => { console.log('Choice clicked')})
      .add('Set', () => { console.log('Set clicked')})
      .add('Branch', () => { console.log('Branch clicked')})
      .enable()
  }
}

let fireEditor = function () {
  return new Editor()
}

export default fireEditor


