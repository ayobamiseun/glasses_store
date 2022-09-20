import React,{useEffect} from 'react';
import Header from './Header';
import Footer  from './Footer'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const DivAbout = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
   .home {
    height:346px;
    
  position: relative;
  background: #28BEBE;

   }
   .img {
    width:100px;
    max-width: 40%;
    position: absolute;
    height:200px;
    top: 71%;
    left: 50%;
    transform: translate(-50%, -50%);
   }
   .body{
    padding-top:30px;
    padding-bottom:20px;
    font-family: 'Space Grotesk', sans-serif;
   }
  
`;

export default function About() {
  
  return (<DivAbout>
       <div>
       <Header />
         <div className='home'>
               <img className='img' src={require('../img/glass2.png')} />
         </div>
         <div className="body">
            <Container>
              <div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h3>who we are</h3>
               <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h3>what we offer </h3>
              <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
              </div>
              <div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h3>why you should trust us</h3>
              <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
              </div>
              
              
            </Container>

         </div>
         <Footer/>
       </div>
  </DivAbout>
  
  )
}
