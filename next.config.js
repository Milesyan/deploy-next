/** @type {import('next').NextConfig} */

const repo = 'deploy-next'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
