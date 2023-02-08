import { commentCounter } from "../src/modules/comment.js";

describe('Testing comment counter function',()=>{
    test('should return 2', ()=> {
        const data = [
            {
                "comment": "This is nice!",
                "creation_date": "2021-01-10",
                "username": "John"
            },
            {
                "comment": "Great content!",
                "creation_date": "2021-02-10",
                "username": "Jane"
            }
        ]

        const counter = commentCounter(data);
        expect(counter).toBe(2);
    })

    test('should return 0', ()=> {
        const data = []

        const counter = commentCounter(data);
        expect(counter).toBe(0);
    })
})
