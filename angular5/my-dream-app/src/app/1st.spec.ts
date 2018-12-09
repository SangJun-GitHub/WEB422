import { ExpectedConditions } from "protractor";

describe('1st tests', () =>{
    it('ture is ture', () =>{
        expect(true).toBe(true);
    });

    it("The 'toBe' matcher compares with ===", function(){
        var a = 12;
        var b = a;
        
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

    it("works for simple literals and variables", function(){
        var a = 12;
        expect(a).toEqual(12);
    });

    it("shold work for objects", function(){
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
    });

    it("the 'toMatch' matcher is for redular expressions", function(){
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    // it("The 'toBeDefined' matcher compares against undefined", function(){
    //     var a = {
    //         foo: "foo",
    //         bar: undefined
    //     };
    //     expect(a.foo).toBeDefined();
    //     expect(a.bar).not.toBeDefined();
    //     expect(a.pool).not.toBeDefined();

    //     expect(a.foo).not.toBeUndefined();
    //     expect(a.bar).toBeUndefined();
    //     expect(a.pool).toBeUndefined();
    // });

    it("The 'toBeNull' matcher compares against null", function(){
        var a = null;
        var foo = "foo";

        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBetruthy' matcher is for boolean casting testing", function(){
        var a, foo = "foo";
        
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function(){
        var a, foo = "foo";

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("works for finding an item in an Array", function(){
        var a = ["foo", "bar", "baz"];

        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("also works for finding a substring", function(){
        var a = "foo bar baz";

        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function(){
        var pi = 3.1415926,
        e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function(){
        var pi = 3.1415926,
        e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision match comparisons",function(){
        var pi = 3.1415926,
        e = 2.78;

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    // it("the 'toThrow' matcher is for testing if a function throws an exception", function(){
    //     var foo = function(){
    //         return 1+2;
    //     };
    //     var bar = function(){
    //         return a+1;
    //     }
    //     var baz = function(){
    //         throw 'what';
    //     }
    //     expect(foo).not.toThrow();
    //     expect(bar).toThrow();
    //     expect(baz).toThrow('what');
    // });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", function(){
        var foo = function(){
            throw new TypeError("foo bar baz");
        };

        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });

    var foo = function (x, callBack) {
        if (x) {
            callBack();
        }
    };
    
    it("should not call the callBack", function () {
        foo(false, function () {
            fail("Callback has been called");
        });
    });

    it("test", function(){
        let countArray = [3,9,7,3,8];
        
        expect(countArray.length).toBeGreaterThan(3);
        expect(countArray).not.toContain(6);
//        expect(sum).toBeUndefined();
        var sum = total(countArray, countArray.length);
        console.log(sum);
        expect(sum).toEqual(30);
    

    })
    let total = function (x, n){
        var sum =0;
        for(var i =0; i<n;i++){
            sum += x[i];
        }
        return sum;
    }
});

