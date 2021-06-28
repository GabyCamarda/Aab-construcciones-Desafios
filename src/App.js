import React, { Component } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserCard from './components/UserCard/UserCard';

class App extends Component {
  render() {
    return (
      <div>
         <Header
         titulo={'bienvenido'}
         subtitulo={'Aab Construcciones'}         
         />

        <div className='row usercard'>

            <div className='col usercard'>
            <UserCard
                    img={'https://http2.mlstatic.com/D_NQ_NP_979385-MLA46317456835_062021-O.webp'}
                    title={'Herramienta'}
                    name={'Claudio'}
                    description={'Herramientas compradas'}
            
            />
            </div>

            <div className='col usercard'>
            <UserCard
                    img={'https://http2.mlstatic.com/D_NQ_NP_979385-MLA46317456835_062021-O.webp'}
                    title={'Herramienta'}
                    name={'Claudio'}
                    description={'Herramientas compradas'}
            
            />
            </div>

            <div className='col usercard'>
            <UserCard
                    img={'https://http2.mlstatic.com/D_NQ_NP_979385-MLA46317456835_062021-O.webp'}
                    title={'Herramienta'}
                    name={'Claudio'}
                    description={'Herramientas compradas'}
            
            />
            </div>

        </div>


         <Footer />
      </div>
    )
  }
}

export default App

