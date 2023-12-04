export const queries = {
    getCliente: "SELECT * FROM CLIENTE",
    postCliente: "INSERT INTO CLIENTE (ClienteID, PNombre, SNombre, PApellido, SApellido, DireccionID, Telefono, Correo, Contrasena, FechaNacimiento) VALUES (@ClienteID, @PNombre, @SNombre, @PApellido, @SApellido, @DireccionID, @Telefono, @Correo, @Contrasena, @FechaNacimiento)",
    getClienteById: "SELECT * FROM CLIENTE WHERE ClienteID = @ClienteID",
    deleteClienteById: "DELETE FROM CLIENTE WHERE ClienteID = @ClienteID",
    putCliente: "UPDATE CLIENTE SET PNombre = @PNombre, SNombre = @SNombre, PApellido = @PApellido, SApellido = @SApellido, DireccionID = @DireccionID, Telefono = @Telefono, Correo = @Correo,Contrasena = @Contrasena, FechaNacimiento = @FechaNacimiento"
};