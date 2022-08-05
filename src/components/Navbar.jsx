import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import routes from '../routes';
import { actions } from '../slices';

const Navbar = () => {
  const dispatch = useDispatch();
  const { openModal } = actions;

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to={routes.storePagePath()}>
          Online Store
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Collapse className="justify-content-end">
          <Button onClick={handleOpenModal}>
            <AddIcon></AddIcon>
          </Button>
          <Button className="ms-2" as={Link} to={routes.cartPagePath()}>
            <ShoppingCartIcon />
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
