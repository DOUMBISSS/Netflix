


export default function Slider () {
    return (
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://ci.jumia.is/cms/1_2023/W15/D3/CI_W15_S_GEN_RAMADAN-mMMM.png" class="d-block w-100" alt="..."/>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Le juste équilibre entre le style et l'utilité.</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div class="carousel-item">
    <img src="https://ci.jumia.is/cms/1_2023/W16/D1/CI_W16_S_GEN_CPR.gif" class="d-block w-100" alt="..."/>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Un monde de couleurs vibrantes</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img src="https://ci.jumia.is/cms/1_2023/W15/SX/CI_W15_S_GEN_RAMADAN_FBJ.gif" class="d-block w-100" alt="..."/>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Habillez-les pour le printemps</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}