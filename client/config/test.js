import { expect } from 'chai';
import hook from 'css-modules-require-hook';
import { JSDOM } from 'jsdom';
import {
  configure,
  mount,
  render,
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

hook({
  extensions: ['.css'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

require.extensions['.jpg'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.svg'] = function () {
  return null;
};

global.document = dom.window.document;
global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
global.window = dom.window;
