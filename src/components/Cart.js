import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './cart.css';
import Button from 'react-bootstrap/Button';

function Cart({cart_items}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const cart = JSON.parse(localStorage.getItem('cart'));

    const [cartI, setCartI] = useState([...cart]);


    const handleRemove = (id) => {
        // const newCart = cart_items.filter((item) => item.id !== id);
        // setCart([...newCart]);

        // remove item from local storage
        const cart = JSON.parse(localStorage.getItem('cart'));
        const newCart = cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify([...newCart]));
        changeState();
      };

    const changeState = () => {
        setCartI(JSON.parse(localStorage.getItem('cart')));
    }


  return (
    <>
      <Nav.Link onClick={handleShow}>Saved Movies</Nav.Link>

      <Offcanvas show={show} onHide={handleClose} className="bg-body-tertiary" data-bs-theme="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Movies to Watch</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <article>
            {cart.map((item) => (
                <div className='box' key={item.id}>
                <div className="cart_box">
                <div className="cart_img">
                    <img src={item.img} alt="smth" />
                    <p>{item.title}</p>
                </div>
                </div>
                <div>
                    <Button className='card_button' onClick={() => handleRemove(item.id)}>Remove</Button>
                </div>
                </div>
            ))}
            </article>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;