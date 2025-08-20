import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [{
        dir: 'dist/types',
        format: 'es',
    },], plugins: [typescript({
        declaration: true, emitDeclarationOnly: true,
        tsconfig: './tsconfig.rollup.json',
        outDir: 'dist/types',
    }),],
    external: (id) => !id.startsWith('.') && !id.startsWith('/'),
};
