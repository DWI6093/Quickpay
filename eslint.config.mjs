import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuraciones base de Next.js + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Integración con Prettier (desactiva reglas que choquen con el formateo)
  ...compat.extends("prettier"),

  {
    rules: {
      /* -------------------------------------------------------
       * TypeScript
       * ----------------------------------------------------- */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],

      /* -------------------------------------------------------
       * React
       * ----------------------------------------------------- */
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        { callbacksLast: true, shorthandFirst: true },
      ],

      /* -------------------------------------------------------
       * General
       * ----------------------------------------------------- */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  {
    // Ignora archivos generados y de configuración
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "*.config.js",
    ],
  },
];

export default eslintConfig;
