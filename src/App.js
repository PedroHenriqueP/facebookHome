import { Section, Limit, More, Profile, Body, Contacts, NewPost, Profile2, Line, IconPost } from "./styled";

import Pedro from "./assets/pedro.jpeg";
import Camera from './assets/camera.png';
import Photo from './assets/foto.png';

function App() {
  return (
    <Section>
      <Limit>


        <More>
          <div>
            <Profile src={Pedro} />
            <a>Pedro Henrique</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeFPnzcD7436RWhkJ6Ut-Jl6FjhaWUpP68wWOFpZSk_rzItnpGAcFK_Qlpgi04tZCgRC-2mypsyi1Tx28XgILaOe" />
            <a>COVID-19: Centro de informações</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeFyyCjHt0xGiUS-_UKBetQ-qfpKmA4GtxSp-kqYDga3FHajX2VxI0vaRGISVGLk7j6cpmrgbYTWfebhlwIRA4_f" />
            <a>Amigos</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeH2wEALaeAcFYZ3UIMsOSSZZ3xAUM5_bWpnfEBQzn9tatSsMcy5Ae458LWxNC0yINiyv_LmC4epPzTX-dWDjm3E" />
            <a>Grupos</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeG3tyvpPqvVi_TeeTj8Y0dR-vsl1K9A-9v6-yXUr0D72yZI36tVM-X8atj1IyYNbtehA5rZuBqPeovfPxTll8sM" />
            <a>Marketplace</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeG2VO64N0NNACc1aCnQpUlH2NRDTXGHJ53Y1ENNcYcnnTtWJCpHdGbv9LEnMK3XtojiZZBJ6wAObT_AyR-dMupb" />
            <a>Watch</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png?_nc_eui2=AeHoSUJ2tye_Ebt3R7xQ7dTveGQYcQV2gv94ZBhxBXaC_x4tz15NhSzxk4mKfiTRgnRao_Ghs4U6ldzjudTGJ_dy" />
            <a>Eventos</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png?_nc_eui2=AeH6-MPG7uBB9Cnt-NOxYqXoFvGCZ9KBlcEW8YJn0oGVwTjyDUdCAR3RHuYfwVir3XpqbCxXr_FztM7doke1YAxS" />
            <a>Memórias</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeE3ljFDByGHGXKOn4ytBfT4-5kYScafj0T7mRhJxp-PRHvYeLK6fZomCuv7sN-Q2LnL5edmV5kYIiS6jp6JXlXB" />
            <a>Salvos</a>
          </div>
          <div>
            <Profile src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFlqQDrctkBHeQpUCfvymJ7tEPFOzh_t-u0Q8U7OH-361QnnaWvsJ6wLmxf-hAzl39s5FlYx99ZajXOcq4oGXfQ" />
            <a>Páginas</a>
          </div>
        </More>


        <Body>
          <NewPost>
            <div className='new'>
              <Profile2 src={Pedro}/>
              <input placeholder='Em que estás pensando, Pedro?'></input>
            </div>
            <Line/>
            <div className='media'>
              <div className='video'>
                <IconPost src={Camera}/>
                <a>Vídeo em direto</a>
              </div>
              <div className='video'>
                <IconPost src={Photo}/>
                <a>Foto/vídeo</a>
              </div>
            </div>
          </NewPost>
        </Body>
        <Contacts>oi</Contacts>
      </Limit>
    </Section>
  );
}

export default App;