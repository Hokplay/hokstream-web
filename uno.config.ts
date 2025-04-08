import {
  defineConfig,
  presetAttributify,
  presetWind,
  transformerAttributifyJsx,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify({
      prefix: 'uno-',
      prefixedOnly: true
    })
  ],
  transformers: [
    transformerAttributifyJsx({
      blocklist: [/^(?!uno)/]
    }),
    transformerVariantGroup()
  ]
});
