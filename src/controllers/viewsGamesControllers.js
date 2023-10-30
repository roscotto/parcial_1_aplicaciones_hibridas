// import { array } from "yup";
// import gamesServices from "../services/gamesServices.js";
// /* -------------------------------------------------------------------------------------------------------------*/



// function exportHtml(games) {
//     let html = `
//     <!DOCTYPE html>
// <html lang="es">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Híbridas Parcial 1</title>

//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//   <link
//     href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700;800&family=Nunito+Sans:wght@300;400;600;700&display=swap"
//     rel="stylesheet">
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//   <link rel="stylesheet" href="./css/styles.css">

// </head>


// <body>

//   <header>
//     <h1 class="d-none">Híbridas Parcial 1</h1>
//     <nav class="container navbar navbar-expand-lg bg-body-tertiary">
//       <div class="flex container-fluid">
//         <div>
//           <a class="navbar-brand" href="#">Ejercicio Parcial 1</a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div class="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div class="navbar-nav">
//             <a id="linkInicio" class="nav-link active" aria-current="page" href="#">Inicio</a>
//             <div class="nav-link dropdown">
//               <a id="linkgames" class="text-reset text-decoration-none dropdown-toggle" href="#" role="button"
//                 data-bs-toggle="dropdown" aria-expanded="false">
//                 games
//               </a>

//               <ul class="dropdown-menu">
//                 <li><a id="linkProyMobile" class="dropdown-item" href="#">Mobile</a></li>
//                 <li><a id="linkProyLanding" class="dropdown-item" href="#">LandingPage</a></li>
//                 <li><a id="linkProyWeb" class="dropdown-item" href="#">Web App</a></li>
//                 <li><a id="linkProyEcommerce" class="dropdown-item" href="#">e-Commerce</a></li>
//                 <li><a id="linkProyGames" class="dropdown-item" href="#">Games</a></li>
//               </ul>
//             </div>
//             <a id="linkPerfil" class="nav-link" href="#">Perfil de usuario</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   </header>

//   <main class="mt-5">

//     <section class="container" id="vistaInicio">
//       <h2>Inicio</h2> `;

//     for (let i = 0; i < games.length; i++) {
//         html += `
//                 <div>
//                 <h3>${games[i].name}</h3>
//                 <p>${games[i].description}</p>
//                 <p>${games[i].technologies}</p>
//                 <a href="${games[i].link}">Link</a>
//                 <p>${games[i].section}</p>
//                 <p>${games[i].img}</p>
//                 </div>`;


//     }
//     html += `
//         </section>
//         </main>




//   <footer class="bg-grey py-lg-3 mt-5 pt-5">



//   </footer>

//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
//     crossorigin="anonymous"></script>

//   <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
//     integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"
//     async></script>


// </body>

// </html>`;
//     return html;
// }
















// /* -------------------------------------------------------------------------------------------------------------*/
// async function getInfoGames(req, res) {
//     const genre= req.path.split("/")[1];
//     console.log('[viewsGamesController.js]', genre)

//     gamesServices.gameByGenre({ "genre": genre})
//         .then(function (games) {
//             res.send(exportHtml(games));
//         })

// }

// export default {
//     getInfoGames
// }

