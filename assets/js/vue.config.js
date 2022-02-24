const app = new Vue({
    el: '#app',
    data: {
      texto: 'Hola Vue!',
      menuCrearPlaylist:false
    },
    methods: {
        cambiarEstado(){
            this.menuCrearPlaylist == true ? this.menuCrearPlaylist=false : this.menuCrearPlaylist = true
        }
    }
})