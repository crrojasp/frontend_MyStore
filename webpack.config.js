// webpack.config.js

module.exports = {
    // Otras configuraciones de Webpack...

    devServer: {
        allowedHosts: ['137.184.226.17'], // Reemplaza "your-domain.com" con tu dominio o dirección IP
        setupMiddlewares: (devServer) => {
            // Configuración adicional de middlewares si es necesario
        },
    },
};
