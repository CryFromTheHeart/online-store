import React from 'react';

import { Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom';
import routes from '../routes';

function Navbar() {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to={routes.storePagePath()}>
          Online Store
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Collapse className="justify-content-end">
          <Button className="ms-2" as={Link} to={routes.cartPagePath()}>
            <ShoppingCartIcon />
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
export default Navbar;
