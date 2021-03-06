 import React from 'react'
//  import excerciseImg from '../images/exercise.png'
 import circlesImg from '../images/circles.png'
 import './styles/Card.css'

 class Card extends React.Component {

    render(){

    const { title, description, img } = this.props

        return (
            <div className="Card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`
            }}
            >
                <div className="Card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 }

 export default Card