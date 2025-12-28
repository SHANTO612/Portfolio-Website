const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  { ignores: [".next/**", ".next-build/**", "node_modules/**"] },
  ...nextCoreWebVitals,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];
