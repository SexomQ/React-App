import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './cart.css';
import Button from 'react-bootstrap/Button';

function Cart({cart_items, setCart}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemove = (id) => {
        const newCart = cart_items.filter((item) => item.id !== id);
        setCart([...newCart]);
      };


  return (
    <>
      <Nav.Link onClick={handleShow}>Saved Movies</Nav.Link>

      <Offcanvas show={show} onHide={handleClose} className="bg-body-tertiary" data-bs-theme="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Movies to Watch</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <article>
            {cart_items.map((item) => (
                <div className='box' key={item.id}>
                <div className="cart_box">
                <div className="cart_img">
                    <img src={item.img} alt="" />
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