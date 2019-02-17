module.exports = {
    webpackConfig: require('react-scripts/config/webpack.config.js')(
        'development'
    ),
    // components: 'src/lib/**/*.js'
    sections: [
        {
            name: 'Artist components',
            components: 'src/lib/Artist/*.js',
            ignore: ['src/lib/Artist/index.js', 'src/lib/Artist/useArtist.js'],
            exampleMode: 'collapse'
        }
    ]
};