export const queries = {
    getVenta: "SELECT * FROM VENTA",
    postVenta: "INSERT INTO VENTA (VentaID, FechaVenta, TotalVenta, ClienteID, MetodoEntregaID, MetodoPagoID) VALUES (@VentaID, @FechaVenta, @TotalVenta, @ClienteID, @MetodoEntregaID, @MetodoPagoID)",
    getVentaById: "SELECT * FROM VENTA WHERE VentaID = @VentaID",
    deleteVentaById: "DELETE FROM VENTA WHERE VentaID = @VentaID",
    putVenta: "UPDATE VENTA SET FechaVenta = @FechaVenta, TotalVenta = @TotalVenta, Cliente = @ClienteID, MetodoEntrega = @MetodoEntregaID, MetodoPago = @MetodoPagoID"
};