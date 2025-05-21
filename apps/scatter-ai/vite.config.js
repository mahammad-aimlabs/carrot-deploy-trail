// @ts-ignore
import config from 'config-vite';
import {defineConfig,mergeConfig} from 'vite'
// export default config();

//Added for extending common config
export default defineConfig(({ command, mode }) => {
    return mergeConfig(config(), {
        server: {
            proxy:{
                '/api': {
                    // target: 'http://localhost:6001/',
                    target: 'https://photon-stage.qubitgamez.com/',
                    changeOrigin: true,
                    // @ts-ignore
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            }
        },
      // your game-specific overrides or additions
    });
  });