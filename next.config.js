/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '192.168.0.22',
				port: '1337',
				pathname: '/uploads/**',
			},
		],
	},
}
module.exports = nextConfig
