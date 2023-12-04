export const queries = {
    getProducto: "SELECT * FROM PRODUCTO",
    postProducto: "INSERT INTO PRODUCTO (ProductoID, NombreProducto, Descripcion, PrecioCompra, PrecioVenta, StockActual, StockMinimo, ProveedorID, MarcaID) VALUES (@ProductoID, @NombreProducto, @Descripcion, @PrecioCompra, @PrecioVenta, @StockActual, @StockMinimo, @ProveedorID, @MarcaID)",
    getProductoById: "SELECT * FROM PRODUCTO WHERE ProductoID = @ProductoID",
    deleteProductoById: "DELETE FROM PRODUCTO WHERE ProductoID = @ProductoID",
    putProducto: "UPDATE PRODUCTO SET NombreProducto = @NombreProducto, Descripcion = @Descripcion, PrecioCompra = @PrecioCompra, PrecioVenta = @PrecioVenta, StockActual = @StockActual, StockMinimo = @StockMinimo, ProveedorID = @ProveedorID, MarcaID = @MarcaID WHERE ProductoID = @ProductoID"
};