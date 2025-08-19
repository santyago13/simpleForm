import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

const Formulario = () => {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (form && form.checkValidity()) {
      alert("Formulario enviado correctamente.");
      // Si quieres limpiar el formulario después de enviar:
      // form.reset();
    } else {
      // Esto muestra los mensajes de validación nativos de HTML5
      form.reportValidity();
      alert("Por favor, completa todos los campos requeridos.");
    }
  }

  return (
    <div className="container py-3">
      <Form ref={formRef} noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa un nombre" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un apellido"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingresa un DNI" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa un email" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;