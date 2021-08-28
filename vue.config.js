module.exports = {
    lintOnSave: 'warning',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/sass/Global/_colors.scss";
                `
            }
        }
    }
};
