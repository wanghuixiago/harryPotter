// def testBasics
//   assert_equal(0, price([]))
//   assert_equal(8, price([1]))
//   assert_equal(8, price([2]))
//   assert_equal(8, price([3]))
//   assert_equal(8, price([4]))
//   assert_equal(8 * 3, price([1, 1, 1]))
// end

// def testSimpleDiscounts
//   assert_equal(8 * 2 * 0.95, price([0, 1]))
//   assert_equal(8 * 3 * 0.9, price([0, 2, 4]))
//   assert_equal(8 * 4 * 0.8, price([0, 1, 2, 4]))
//   assert_equal(8 * 5 * 0.75, price([0, 1, 2, 3, 4]))
// end


// def testSeveralDiscounts
//   assert_equal(8 + (8 * 2 * 0.95), price([0, 0, 1]))
//   assert_equal(2 * (8 * 2 * 0.95), price([0, 0, 1, 1]))
//   assert_equal((8 * 4 * 0.8) + (8 * 2 * 0.95), price([0, 0, 1, 2, 2, 3]))
//   assert_equal(8 + (8 * 5 * 0.75), price([0, 1, 1, 2, 3, 4]))
// end


// def testEdgeCases
//   assert_equal(2 * (8 * 4 * 0.8), price([0, 0, 1, 1, 2, 2, 3, 4]))
//   assert_equal(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8), 
//     price([0, 0, 0, 0, 0, 
//            1, 1, 1, 1, 1, 
//            2, 2, 2, 2, 
//            3, 3, 3, 3, 3, 
//            4, 4, 4, 4]))
// end
const main = require("../src/main")


describe("main", () => {
    test("mian is defined", () => {
            expect(main).toBeDefined()
        }),
        test("main should be a function", () => {
            expect(typeof (main)).toBe('function')
        }),
        test("no book return 0", () => {
            let inputs = [];
            expect(main(inputs)).toBe(0)
        }),
        test("single book return 8", () => {
            let inputs = [1];
            expect(main(inputs)).toBe(8)
        }),
        test("single book return 8", () => {
            let inputs = [3];
            expect(main(inputs)).toBe(8)
        }),
        test("single book return 8", () => {
            let inputs = [4];
            expect(main(inputs)).toBe(8)
        }),
        test("same book return 24", () => {
            let inputs = [1, 1, 1];
            expect(main(inputs)).toBe(24)
        }),
        test("diffrent book return 24", () => {
            let inputs = [0, 1];
            expect(main(inputs)).toBe(15.2)
        }),
        test("diffrent book return 21.6", () => {
            let inputs = [0, 1, 2];
            expect(main(inputs)).toBe(21.6)
        }),
        test("diffrent book return 30", () => {
            let inputs = [0, 1, 2, 3, 4];
            expect(main(inputs)).toBe(30)
        }),
        test("diffrent book return 25.6", () => {
            let inputs = [0, 1, 2, 4];
            expect(main(inputs)).toBe(25.6)
        }),
        test("several book return 23.2", () => {
            let inputs = [0, 0, 1];
            expect(main(inputs)).toBe(23.2)
        }),
        test("several book return 23.2", () => {
            let inputs = [0, 0, 1, 1];
            expect(main(inputs)).toBe(30.4)
        }),
        test("several book return 23.2", () => {
            let inputs = [0, 0, 1, 1, 2, 2, 3, 4];
            expect(main(inputs)).toBe(51.2)
        })
    test("several book return 23.2", () => {
        let inputs = [0, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
            2, 2, 2, 2,
            3, 3, 3, 3, 3,
            4, 4, 4, 4
        ];
        expect(main(inputs)).toBe(141.2)
    })

})