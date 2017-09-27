const add = require('./add');
const expect = require('chai').expect;

describe('加法函数测试', function () {
    it('1加1应该等于2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
    it('3加上-3应该等于0', function () {
        expect(add(3, -3)).to.be.equal(0);
    });
});
