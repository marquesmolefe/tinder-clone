import React from 'react'
import './TinderCards.css';  

function TinderCards() {
    return (
        <div className="tindercards">
            <div className='tinderCards__cardContainer'>
                {people.map(person) => {
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className='card'
                            >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                }}
            </div>
            
        </div>
    )
}

export default TinderCards; 
