using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Data.Entity.Core;
using System.Data;

namespace HK.BussinessLogic
{
     public partial class UOW : IDisposable, IUnitOfWork
     {
        public DatosEntities context;
        #region Miembros
        private Parametro systemParameters;
        private FiscalConfig fiscalConfig;
        private PuntoVentaConfig puntoVentaConfig;
        private SistemaConfig sistemaConfig;
        private GenericRepository<Pago> pagoRepository;
        private GenericRepository<Contador> contadorRepository;
        private GenericRepository<Usuario> usuarioRepository;
        private GenericRepository<Tercero> clienteRepository;
        private GenericRepository<Tercero> proveedorRepository;
        private GenericRepository<Producto> productoRepository;
        private GenericRepository<Cotizacion> cotizacionRepository;
        private GenericRepository<Factura> facturaRepository;
