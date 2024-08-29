module.exports = {
  root: true,
  extends: ['prettier', 'universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
  },
}
