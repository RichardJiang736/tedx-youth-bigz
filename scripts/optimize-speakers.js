import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const inputDir = join(__dirname, 'speakers-source')
const outputDir = join(__dirname, '..', 'public', 'speakers', 'optimized')

const sizes = [400, 800]

const files = (await readdir(inputDir)).filter(f => f.endsWith('.png'))

await mkdir(outputDir, { recursive: true })

for (const file of files) {
  const name = file.replace('.png', '')
  const inputPath = join(inputDir, file)

  for (const width of sizes) {
    await sharp(inputPath)
      .resize(width)
      .webp({ quality: 82 })
      .toFile(join(outputDir, `${name}-${width}w.webp`))
  }

  console.log(`✓ ${file} → ${sizes.map(w => `${name}-${w}w.webp`).join(', ')}`)
}

console.log(`\nDone. Optimized ${files.length} images.`)
