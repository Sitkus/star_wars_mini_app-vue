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
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Star Wars Mini App';
            return args;
        });
    }
};
