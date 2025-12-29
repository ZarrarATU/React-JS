// export const data = [
//     {title: 'How to grow',img: 'https://picsum.photos/id/227/250/150',liked: false,subscribers: 300,playing: false,id: 4384943},
//     {title: 'I survived the new era',img: 'https://picsum.photos/id/287/250/150',liked: true,subscribers: 400,playing: false,id: 43849435},
//     {title: 'How to keep safe',img: 'https://picsum.photos/id/217/250/150',liked: false,subscribers: 20,playing: false,id: 438494435},
//     {title: 'minecraft is dying',img: 'https://picsum.photos/id/27/250/150',liked: false,subscribers: 60,playing: false,id: 438449435},
//     {title: 'People are suck',img: 'https://picsum.photos/id/297/250/150',liked: true,subscribers: 70,playing: false,id: 4324849435},
// ]


async function getData() {
    const res = await fetch('http://localhost:34000/0')
    const data = await res.json()
    return data
}

export default getData




