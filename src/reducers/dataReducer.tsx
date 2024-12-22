const initialState = {
   projectsHTML: [
      {
         id: 1,
         img: 'https://user-images.githubusercontent.com/92051961/189170278-cebe726c-b700-462c-9bca-f4b6481514b5.png',
         link: 'https://artemiepirnau.github.io/course-landing-page/',
      },
      {
         id: 2,
         img: 'https://user-images.githubusercontent.com/92051961/189170521-20b86619-f74e-4cdc-8e43-998e36096444.png',
         link: 'https://artemiepirnau.github.io/tunning-landing-page/',
      },
      {
         id: 3,
         img: 'https://user-images.githubusercontent.com/92051961/189170805-d5d939a2-f88e-492f-94ab-b339290a7675.png',
         link: 'https://artemiepirnau.github.io/qwery-landing-page/',
      },
      {
         id: 4,
         img: 'https://user-images.githubusercontent.com/92051961/189171162-a1de364f-4de6-4312-b59b-f941c26ed15f.png',
         link: 'https://artemiepirnau.github.io/dev-landing-page/',
      },
      {
         id: 5,
         img: 'https://user-images.githubusercontent.com/92051961/189171336-9e70633b-31ad-4aa0-8e52-92eb37c5ca8b.png',
         link: 'https://artemiepirnau.github.io/ecology-landing-page/',
      },
      {
         id: 6,
         img: 'https://user-images.githubusercontent.com/92051961/189171569-95af6733-704e-454c-bd32-61df5a7ed4d5.png',
         link: 'https://artemiepirnau.github.io/shoes-shop/',
      },
      {
         id: 7,
         img: 'https://user-images.githubusercontent.com/92051961/189171758-435b5e5f-c0cc-4936-b92d-7f0e2dc20097.png',
         link: 'https://artemiepirnau.github.io/lunajs-landing-page/',
      },
      {
         id: 8,
         img: 'https://user-images.githubusercontent.com/92051961/189171932-5ba9b7f5-ed47-4171-9495-b88c12b80bc2.png',
         link: 'https://artemiepirnau.github.io/furniture-order/',
      },
      {
         id: 9,
         img: 'https://user-images.githubusercontent.com/92051961/189172078-878bc949-3f9c-4471-95e1-d26dbb58604c.png',
         link: 'https://artemiepirnau.github.io/photographer-landing-page/',
      },
      {
         id: 10,
         img: 'https://user-images.githubusercontent.com/92051961/189172228-25464239-d108-4d00-b9f3-196be5f62f89.png',
         link: 'https://artemiepirnau.github.io/cinema-landing-page/',
      },
      {
         id: 11,
         img: 'https://user-images.githubusercontent.com/92051961/189172368-07c512a8-34db-4120-89c3-349c00887efe.png',
         link: 'https://artemiepirnau.github.io/cybersecurity-landing-page/',
      },
      {
         id: 12,
         img: 'https://user-images.githubusercontent.com/92051961/189172519-0ef663d3-1bbf-430d-a276-4ce5a658c92f.png',
         link: 'https://artemiepirnau.github.io/mentor-landing-page/dist/index.html',
      },
      {
         id: 13,
         img: 'https://user-images.githubusercontent.com/92051961/189172655-69ff96f7-8761-43f1-bf6d-8dcf34915012.png',
         link: 'https://artemiepirnau.github.io/social-media-ui/dist/',
      },
      {
         id: 14,
         img: 'https://user-images.githubusercontent.com/92051961/189172803-515e5129-7522-4c7d-b270-4314c1533242.png',
         link: 'https://artemiepirnau.github.io/blog-ui/dist/',
      },
      {
         id: 15,
         img: 'https://user-images.githubusercontent.com/92051961/189172919-bf5c2b4d-d094-4eed-990c-3b50e32f1774.png',
         link: 'https://artemiepirnau.github.io/3d-courses-ui/dist/',
      },
      {
         id: 16,
         img: 'https://user-images.githubusercontent.com/92051961/189174230-20b1345b-2b8f-4973-bb3d-9919500fcdf8.png',
         link: 'https://artemiepirnau.github.io/mars-travel-landing/dist/',
      },
      {
         id: 17,
         img: 'https://user-images.githubusercontent.com/92051961/190860790-dd698c53-73d7-42ee-a463-fe643e03577d.png',
         link: 'https://artemiepirnau.github.io/autoprokat-landing/dist/',
      },
      {
         id: 18,
         img: 'https://user-images.githubusercontent.com/92051961/190860797-a72c86b4-48a4-46d4-8883-b8e22f7c8879.png',
         link: 'https://artemiepirnau.github.io/autoprokat-landing/dist/product.html',
      },
   ],
   projectsJS: [
      {
         id: 19,
         img: 'https://user-images.githubusercontent.com/92051961/189174428-2a6587dd-cc5b-4b38-b135-340e0a28d740.png',
         link: 'https://artemiepirnau.github.io/client-side-validation/dist/index.html',
      },
      {
         id: 20,
         img: 'https://user-images.githubusercontent.com/92051961/189174602-4eee9e0d-eb5e-4d8b-9c59-e1d3a05fffa6.png',
         link: 'https://artemiepirnau.github.io/fetch-pexels-API/dist/index.html',
      },
      {
         id: 21,
         img: 'https://user-images.githubusercontent.com/92051961/189174831-dfae486a-8e9a-4c6d-87a3-e6902fe9a351.png',
         link: 'https://artemiepirnau.github.io/nodes-app/app/',
      },
      {
         id: 22,
         img: 'https://user-images.githubusercontent.com/92051961/189175031-cd23d621-0f4a-46b5-87c9-4027ad4e43e4.png',
         link: 'https://artemiepirnau.github.io/music-player-app/dist/index.html',
      },
      {
         id: 23,
         img: 'https://user-images.githubusercontent.com/92051961/189175194-0fa02429-aab1-4c02-967f-fc1b98db6b75.png',
         link: 'https://artemiepirnau.github.io/weight-converter/app/index.html',
      },
      {
         id: 24,
         img: 'https://user-images.githubusercontent.com/92051961/189175387-45cad9a2-11a6-41b0-b2fe-bed306f86efb.png',
         link: 'https://github.com/ArtemiePirnau/weather-app/tree/master/dist',
      },
      {
         id: 25,
         img: 'https://user-images.githubusercontent.com/92051961/189157852-01ea7332-a88d-4add-a5c7-8119e6863a79.png',
         link: 'https://github.com/ArtemiePirnau/harry-potter-api',
      },
      {
         id: 26,
         img: 'https://user-images.githubusercontent.com/92051961/189158317-beefa62a-8111-43a5-9d1e-84b06e0a0045.png',
         link: 'https://github.com/ArtemiePirnau/marvel-api',
      },
      {
         id: 27,
         img: 'https://user-images.githubusercontent.com/92051961/190911741-22bf51c9-c428-42ca-a91e-6289d560b707.png',
         link: 'https://artemiepirnau.github.io/google-clone/dist/',
      },
   ],
   projectsReact: [
      {
         id: 28,
         img: 'https://user-images.githubusercontent.com/92051961/167386263-1b05d8da-3126-4b66-9c1c-bef2280a5d48.png',
         link: 'https://github.com/ArtemiePirnau/react-movie-search',
      },
      {
         id: 29,
         img: 'https://user-images.githubusercontent.com/92051961/177216685-4c8a49ab-d8af-447d-891a-668d35b58a7a.png',
         link: 'https://github.com/ArtemiePirnau/react-ecommerce',
      },
      {
         id: 30,
         img: 'https://user-images.githubusercontent.com/92051961/176701073-363a6e7f-d972-4177-b1e3-4356569fe5ba.png',
         link: 'https://github.com/ArtemiePirnau/react-valorant-api',
      },
      {
         id: 31,
         img: 'https://user-images.githubusercontent.com/92051961/176444360-dad2fdc1-c15f-46e1-8872-a992bf16a1bf.png',
         link: 'https://github.com/ArtemiePirnau/react-pexels-api',
      },
      {
         id: 32,
         img: 'https://user-images.githubusercontent.com/92051961/189161616-b10804c9-9894-4f72-b9a8-bcda1c01670e.png',
         link: 'https://github.com/ArtemiePirnau/react-pokemon-api',
      },
      {
         id: 33,
         img: 'https://user-images.githubusercontent.com/92051961/193069300-6f9aa3a0-745c-4370-ac85-2f27d081405a.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-posts',
      },
      {
         id: 34,
         img: 'https://user-images.githubusercontent.com/92051961/194701316-f0c7b4a9-5be5-4c0a-865e-e78450b52748.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-search-movie',
      },
      {
         id: 35,
         img: 'https://user-images.githubusercontent.com/92051961/196974027-1d187f46-1164-47cc-b6ae-a27bf149d4dc.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-covid-stats',
      },
      {
         id: 36,
         img: 'https://user-images.githubusercontent.com/92051961/197578230-15970cf9-b751-4738-b285-e625dc9504eb.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-todo',
      },
      {
         id: 37,
         img: 'https://user-images.githubusercontent.com/92051961/199288681-78afcff5-fe8c-41c2-9fb9-c217116a5e12.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-login',
      },
      {
         id: 38,
         img: 'https://user-images.githubusercontent.com/92051961/201527485-e14c9a43-69ee-4fa4-b17b-2eb4cd3dac2e.png',
         link: 'https://github.com/ArtemiePirnau/react-redux-search-songs',
      },
   ],
};
export const allProjects = (state = initialState, { type }: { type: string }) => {
   switch (type) {
      default:
         return state;
   }
};
