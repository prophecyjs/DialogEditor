import { ContextMenu } from './contextmenu'

const contextMenu = new ContextMenu('.editor-background')

/**
 * Create the contextmenu for the editor.
 */
contextMenu.add('Text', () => { console.log('Text clicked')})
  .add('Node', () => { console.log('Node clicked')})
  .add('Choice', () => { console.log('Choice clicked')})
  .add('Set', () => { console.log('Set clicked')})
  .add('Branch', () => { console.log('Branch clicked')})
  .enable()
