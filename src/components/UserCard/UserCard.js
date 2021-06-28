import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './UserCard.css';
co<div className='col usercard'>
            <UserCard
                    img={'https://http2.mlstatic.com/D_NQ_NP_979385-MLA46317456835_062021-O.webp'}
                    title={'Herramienta'}
                    name={'Claudio'}
                    description={'Herramientas compradas'}
            
            />
            </div>(
  <Card className='usercard'>
    <Image src= {img} wrapped ui={false} />
    <Card.Content>
      <Card.Header> {name} </Card.Header>
      <Card.Meta>
        <span className='date'> {title} </span>
      </Card.Meta>
      <Card.Description>
       {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default UserCard