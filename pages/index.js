import Link from "next/link";

export default function Home() {
  return (
  <>
  <head>
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  </head>
  <body class ="bg-light text-dark">
    <div class="container" Style="bg-light text-dark">
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">

    <a class="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
  </svg>
    <button type="button" class="btn btn-dark text-white position-relative">
      Ayuda de Informática <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
    </button>
    </a>

      <Link href="/contact">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
      </Link>
    
      <Link href="/about">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg>
      </Link>

      <Link href="/admin">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
      <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
      </Link>
      
    
    </div>
    </nav>
      <div class="row" Style="margin: 5px;">
      <div class="card" Style="width: 23rem;">
      <img class="card-img-top" src="https://i.ibb.co/1sB2pBb/servicesystems.jpg" alt="Logo" />
       <div class="card-body">
       <h5 class="card-title">Ayuda de informática</h5>
        <p class="card-text">Todos los servicios de tecnología al alcance</p>
        <p class="card-text">Desarrollo de software, web y sistemas</p>
        <a href="#" class="btn btn-danger">Saber Más</a>
       </div>
      </div>
      <br />
      <div class="card" Style="width: 23rem;">
      <img class="card-img-top" src="https://i.ibb.co/FmpSWRd/vectorwebdev.jpg" alt="Developer" />
       <div class="card-body">
       <h5 class="card-title">Desarrollo de Software</h5>
        <p class="card-text">Todos los servicios de tecnología al alcance</p>
        <p class="card-text">Desarrollo de software, web y sistemas</p>
        <a href="#" class="btn btn-danger">Saber Más</a>
       </div>
      </div>
      <br />
      <div class="card" Style="width: 23rem;">
      <img class="card-img-top img-fluid" src="https://i.ibb.co/d6NcQQs/callersvector.jpg" alt="Worker" />
       <div class="card-body">
       <h5 class="card-title">Servicio de garantía</h5>
        <p class="card-text">Todos los servicios de tecnología al alcance</p>
        <p class="card-text">Desarrollo de software, web y sistemas</p>
        <a href="#" class="btn btn-danger">Saber Más</a>
       </div>
      </div>
      </div>

    </div><br />
    <footer> 
    <h6>©2021 -     Jhon Jairo Linares    - 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg> </h6>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
  </body>
  </>
  );}