import alias from 'rollup-plugin-alias';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import uglify from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';

const path = require('path');

export default {
    input: path.join(__dirname, 'streamedian.js'),
    output: {
        file: path.join(__dirname, 'example/streamedian.min.js'),
        format: 'iife'
    },
    sourceMap: true,
    plugins: [
        terser({
            mangle: false,
        }),
        alias({
            bp_logger: path.join(__dirname,'node_modules/bp_logger/logger.js'),
            bp_event: path.join(__dirname,'node_modules/bp_event/event.js'),
            bp_statemachine: path.join(__dirname,'node_modules/bp_statemachine/statemachine.js'),
            jsencrypt: path.join(__dirname,'node_modules/jsencrypt/src/jsencrypt.js'),
            rtsp: path.join(__dirname,'node_modules/html5_rtsp_player/src'),
            streamedian: path.join(__dirname,'src'),
        })
    ]

}
