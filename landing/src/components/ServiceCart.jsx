import LoanPic from "../assets/images/loan.jpg"

import "../styles/ServiceCart.css"

function ServiceCart({icon, title, description}) {
    return (
        <div className="cart__container">
            <div className="icon">
                <img src={icon} />
            </div>
            <div className="text">
                <div className="title">{title}</div>
                <div className="description">{ description }</div>
            </div>
        </div>
    )
}

export default ServiceCart;