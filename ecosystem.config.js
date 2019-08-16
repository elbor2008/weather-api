module.exports = {
  apps: [
    {
      name: 'weather api',
      script: './src/index.js',
      instances: 'max',
      exp_backoff_restart_delay: 100
    }
  ]
};
