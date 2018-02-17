describe('Object Testing', function () {
    it.skip('Object Equal', function () {
        var objA = { name: "Foo", role: 1 };
        var objB = { name: "Foo", role: 1 };
        objA.should.equal(objB); // Should fail as it is reference check
    });
    it('Object Deep Equal', function () {
        var objA = { name: "Foo", role: 1 };
        var objB = { name: "Foo", role: 1 };
        objA.should.deep.equal(objB); // Should succeed as it is value check
    });
    it('Object Property key-value Test', function () {
        var objA = { name: "Foo", role: 1 };
        objA.should.have.property('name').equal("Foo"); // Note: Equal check is case sensitive
    })
});