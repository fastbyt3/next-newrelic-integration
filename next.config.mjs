/** @type {import('next').NextConfig} */
const nextConfig = {
	/**
   *
   * @param {import('webpack').Configuration} config
   * @param {import('next/dist/server/config-shared').WebpackConfigContext} context
   * @returns {import('webpack').Configuration}
   */
	webpack: (config, options) => {
		config.module.rules?.push({
      test: /\.md$/,
      loader: "ignore-loader",
    });
		config.module.rules?.push({
      test: /LICENSE$/,
      loader: "ignore-loader",
    });
		config.module.rules.push({
      test: /@newrelic\/next\/.*\.js$/,
      use: [
        options.defaultLoaders.babel,
      ],
    })
    return config;
	},
};

export default nextConfig;
