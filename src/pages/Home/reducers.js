const initialState = {
  banners: [
    {
      id: 1,
      background: `url('./wallMichifam.png')`,
      float: `./imageBanner.png`,
      title: `GEL ANTIBACTERIAL DE ALTA CALIDAD`,
      title_big: `¿YA NOS CONOCES? `,
      subtitle: `Gel Antibacterial al 70% de alcohol, ideal para desinfectar y sanitizar las manos sin necesidad de usar agua ni toallas de mano.`,
    },
  ],
 
}
// eslint-disable-next-line 
export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_BANNERS':
      return {
        ...state,
        banners: action.payload.data,
      }
    default:
      return state
  }
}
