import micromatch from 'micromatch';
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
				protocol: "https",
			},
		],
	},
	async rewrites() {
		// Ensure patterns are valid and not overly complex
		return [
		  { source: '/valid-route', destination: '/api/valid' },
		];
	  },
};

export default nextConfig;
