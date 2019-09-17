class ContextMenu {

  /**
   * Constructor for the context menu.
   *
   * @constructor
   * @param {string} target - Query selector the the HTMLElement to add the menu to.
   */
  constructor (target) {
    this.target = document.querySelector(target)
    this.rightClickHandler = this.onActivation.bind(this)
    this.create()
  }

  /**
   * Create the menu.
   */
  create () {
    this.menu = document.createElement('DIV')
    this.menu.className = 'menu'

    this.optionsHolder = document.createElement('UL')
    this.optionsHolder.className = 'menu-options'
    this.menu.appendChild(this.optionsHolder)
    this.target.appendChild(this.menu)
  }

  /**
   * Add a new menu item.
   *
   * @param {string} label - The label for the option.
   * @param {function} callback - The callback to call if set item is clicked.
   * @returns {ContextMenu}
   */
  add (label, callback) {
    let option = document.createElement('LI')
    option.innerText = label
    option.className = 'menu-option'
    option.onclick = callback

    this.optionsHolder.appendChild(option)
    return this
  }

  /**
   * Trigger for invoking the menu.
   *
   * @param {Event} e - The mouse event.
   * @returns {boolean}
   */
  onActivation (e) {
    e.preventDefault()
    this.setPosition(e.clientX, e.clientY)
    return false
  }

  /**
   *
   * @param {string} command - The command to toggle the menu either-or show or hide.
   */
  toggleMenu (command) {
    this.menu.style.display = command === 'show' ? 'block' : 'none'
  }

  /**
   * Disable the option to right on the window.
   * We will replace this with our contextmenu.
   */
  enable () {
    window.addEventListener('contextmenu', this.rightClickHandler)
    window.addEventListener('click', () => {
      this.toggleMenu('hide')
    })
    return this
  }

  /**
   * Disable the contextmenu so the browser default
   * context menu will be shown.
   *
   * @returns {ContextMenu}
   */
  disable () {
    window.removeEventListener('contextmenu', this.rightClickHandler, false)
    return this
  }

  /**
   * Set the position of the menu on the screen.
   *
   * @param {number} left - The number of pixels on the x axis.
   * @param {number} top - The number of pixels on the y axis.
   */
  setPosition (left, top) {
    this.menu.style.left = `${left}px`
    this.menu.style.top = `${top}px`
    this.toggleMenu('show')
  }
}

module.exports = ContextMenu