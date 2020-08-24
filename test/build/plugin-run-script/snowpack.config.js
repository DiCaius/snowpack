module.exports = {
  mount: {
    public: '/',
  },
  plugins: [['@hisystems/snowpack-plugin-run-script', {cmd: 'sass src/css:public/css --no-source-map'}]],
};
