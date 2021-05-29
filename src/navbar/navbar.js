import react from 'react';

import { Container, Icon, Limit, FaceMore, Options, ProfileFace, Profile, IconOptions, More } from './styled';

import Face from '../assets/face.png';
import Pedro from '../assets/pedro.jpeg';
import Messenger from '../assets/messenger.png';
import Notification from '../assets/notificacao.png';

export default function Navbar(){
    return(
        <Container>
            <Limit>
                <FaceMore>
                    <Icon src={Face}/>
                    <input type='text' placeholder='Pesquisa no Facebook'/>
                </FaceMore>
                <Options>
                    <ProfileFace>
                        <Profile src={Pedro}/> 
                        <h2>Pedro</h2>  
                    </ProfileFace>    
                    <More>
                        <IconOptions src={Messenger}/>  
                    </More>
                    <More>
                        <IconOptions src={Notification}/>  
                    </More>
                </Options>
            </Limit>
        </Container>
    )
}