<template>
    <div>
        <navbar>

            <navbaritem name="canvas" active="true">
                <div class="inline-block align-middle">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M19 3H1a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zm-1 12H2V5h16v10z"/></svg>
                </div>
                <div class="inline-block  align-middle">
                    <div class="w-auto h-6">Dialog Editor</div>
                </div>
            </navbaritem>


            <navbaritem name="play">
                <div class="inline-block align-middle">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="#FFF"
                              d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/>
                    </svg>
                </div>
                <div class="inline-block  align-middle">
                    <div class="w-auto h-6">Play Dialog</div>
                </div>
            </navbaritem>
            <navbaritem name="characters">
                <div class="inline-block align-middle">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="#FFF"
                              d="M15.989 19.129c0-2.246-2.187-3.389-4.317-4.307-2.123-.914-2.801-1.684-2.801-3.334 0-.989.648-.667.932-2.481.12-.752.692-.012.802-1.729 0-.684-.313-.854-.313-.854s.159-1.013.221-1.793c.064-.817-.398-2.56-2.301-3.095-.332-.341-.557-.882.467-1.424-2.24-.104-2.761 1.068-3.954 1.93-1.015.756-1.289 1.953-1.24 2.59.065.78.223 1.793.223 1.793s-.314.17-.314.854c.11 1.718.684.977.803 1.729.284 1.814.933 1.492.933 2.481 0 1.65-.212 2.21-2.336 3.124C.663 15.53 0 17 .011 19.129.014 19.766 0 20 0 20h16s-.011-.234-.011-.871zm2.539-5.764c-1.135-.457-1.605-1.002-1.605-2.066 0-.641.418-.432.602-1.603.077-.484.447-.008.518-1.115 0-.441-.202-.551-.202-.551s.103-.656.143-1.159c.05-.627-.364-2.247-2.268-2.247-1.903 0-2.318 1.62-2.269 2.247.042.502.144 1.159.144 1.159s-.202.109-.202.551c.071 1.107.441.631.518 1.115.184 1.172.602.963.602 1.603 0 1.064-.438 1.562-1.809 2.152-.069.029-.12.068-.183.102 1.64.712 4.226 1.941 4.838 4.447H20v-2.318c0-1-.273-1.834-1.472-2.317z"/>
                    </svg>
                </div>
                <div class="inline-block  align-middle">
                    <div class="w-auto h-6">Characters</div>
                </div>
            </navbaritem>

            <navbaritem name="variables">
                <div class="inline-block align-middle">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M18.174 1.826c-1.102-1.102-2.082-.777-2.082-.777L7.453 9.681 6 14l4.317-1.454 8.634-8.638s.324-.98-.777-2.082zm-7.569 9.779l-.471.47-1.473.5a2.216 2.216 0 00-.498-.74 2.226 2.226 0 00-.74-.498l.5-1.473.471-.47s.776-.089 1.537.673c.762.761.674 1.538.674 1.538zM16 17H3V4h5l2-2H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-7l-2 2v5z"/></svg>
                </div>
                <div class="inline-block align-middle">
                    <div class="w-auto h-6">Variables</div>
                </div>
            </navbaritem>

        </navbar>
        <div class="flex">
            <sidebar class="w-56 bg-sidebar h-full border-gray-900  border-t">

                <div class="text-center my-8">
                    <button_group>
                        <button_group_button first="true" name="dialogs" active="true">
                            Dialogs
                        </button_group_button>
                        <button_group_button name="components" last="true">
                            Components
                        </button_group_button>
                    </button_group>
                </div>
                <div class="p-6 ">

                    <button_group_content name="dialogs" active="true">
                         Dialogs
                    </button_group_content>
                    <button_group_content name="components">
                        Components
                    </button_group_content>


                </div>


            </sidebar>
            <div class="w-auto">
                <editor_canvas  active="true"></editor_canvas>
                <dialog_player></dialog_player>
                <dialog_characters></dialog_characters>
                <dialog_variables></dialog_variables>
            </div>
        </div>

    </div>

</template>

<script>

  export default {
    // name: 'editor',
    components: {
      // 'navbar': navbar
    },
    mounted () {
      VueEvent.on('navbaritem_clicked', (item) => {
        console.log('Navbar item has been clicked', item.name)
      })
    }
  }
</script>

<style scoped>

</style>