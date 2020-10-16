//create map 
const map = L.map('mapid').setView([-19.9266899,-43.9751174], 13);
//create and add tilelayer 
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;


//create and add marker
map.on('click', (event) => {
    //console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)
    
    // add icon layer
    
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})  

// upload photos
function addPhotoField () {
   //pegar container de fotos #images 
  const container = document.querySelector('#images')
   // pegar container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
   //realizar o clone, da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //VERIFICAR SE O CAMPO ESTA VAZIO SE SIM NAO adicionar ao container images 
  const input = newFieldContainer.children[0]

  if(input.value == "") {
    return
  }
 
   //limpar o campo antes de adicionar outra imagem
  input.value = ""

   // adicionar o clone ao container de #images
   container.appendChild(newFieldContainer)
}
    // deletar campo da imagem adicionada 
function deleteField(event) {
    const span  = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
      //limpart o valor do campo
      span.parentNode.children[0].value = ""
      return
    }
    //deletar o campo
    span.parentNode.remove();
}

//selecao sim ou nao
function toggleSelect(event) {

    // retirar a class active dos botoes 
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    // mudar a class active no botao clicado 
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input escondido com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]') 

    //verficar se 'e sim ou nao 
    input.value = button.dataset.value
}
