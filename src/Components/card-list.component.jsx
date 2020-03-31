import React from 'react';
import './card-list.style.css'
import { Card } from   '../Components/Card/card.component'

export const CardList = (props)=> (

    <div className="card-list">
     {
       props.monsters.map(monster =>(
        <Card key={monster.id}
          monster={monster} >
          </Card>)
        )
      }
</div>

);