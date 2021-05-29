import {
  Section,
  Limit,
  More,
  Profile,
  Body,
  Contacts,
  NewPost,
  Profile2,
  Line,
  IconPost,
  Post,
  BodyLimit,
  PostHead,
  PostComment,
  PostImg,
  PostOption,
  PostFooter,
  Frinds,
  Frind
} from "./styled";

import Pedro from "./assets/pedro.jpeg";
import None from './assets/none.png';
import Camera from "./assets/camera.png";
import Photo from "./assets/foto.png";
import ReactImg from "./assets/react.png";
import Js from "./assets/js.png";

import Navbar from './navbar/navbar';

function App() {
  return (
    <Section>
      <Navbar/>
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
            <div className="new">
              <Profile2 src={Pedro} />
              <input placeholder="Em que estás pensando, Pedro?"></input>
            </div>
            <Line />
            <div className="media">
              <div className="video">
                <IconPost src={Camera} />
                <a>Vídeo em direto</a>
              </div>
              <div className="video">
                <IconPost src={Photo} />
                <a>Foto/vídeo</a>
              </div>
            </div>
          </NewPost>
          <Post>
            <BodyLimit>
              <PostHead>
                <Profile2 src = {Pedro}/>
                <div className='infoPost'>
                  <a className='namePost'>Pedro Henrique</a>
                  <a className='hourPost'>1 h.</a>
                </div>
              </PostHead>
              <PostComment>
                Olá, Eu sou Pedro, um desenvolvedor Jr. React JS e Node Js apaixonado e muito curiso
                por essa área.
              </PostComment>
              <PostImg src ={Pedro}/>
              <Line/>
              <PostOption>
                <a>Curtir</a>
                <a>Comentar</a>
                <a>Compartilhar</a>
              </PostOption>
              <Line/>
            </BodyLimit>
          </Post>
          <Post>
            <BodyLimit>
              <PostHead>
                <Profile2 src = {ReactImg}/>
                <div className='infoPost'>
                  <a className='namePost'>React JS</a>
                  <a className='hourPost'>1 h.</a>
                </div>
              </PostHead>
              <PostComment>
                O que é JavaScript? JavaScript é uma linguagem de programação client-side. 
                Ela é utilizada para controlar o HTML e o CSS para manipular comportamentos 
                na página.
              </PostComment>
              <PostImg src ={Js}/>
              <Line/>
              <PostOption>
                <a>Curtir</a>
                <a>Comentar</a>
                <a>Compartilhar</a>
              </PostOption>
              <Line/>
            </BodyLimit>
          </Post>
        </Body>

        <Contacts>
          <h2>Contatos</h2>
          <Frinds>
            <Frind>
              <Profile src={ReactImg} />
              <a>React</a>
            </Frind>
            <Frind>
              <Profile src={Js} />
              <a>Java Script</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Carlos José Pontes</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Adriana Rabêlo</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Matteus Pontes</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Carla Rabêlo</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Clara Rabêlo</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Milena</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Neto Dias</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Valéria Santos</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Pedro Paulo</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>George Dias</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Gilvandos Dias</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Marcos Antônio</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Anne Beatriz</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Isabel Dias</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Erik Lisboa</a>
            </Frind>
            <Frind>
              <Profile src={None} />
              <a>Evandro Santos</a>
            </Frind>
          </Frinds>
        </Contacts>
      </Limit>
    </Section>
  );
}

export default App;