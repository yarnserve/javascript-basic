// array 배열
// 1. 배열 만들기
{
    const arr1 = new Array()
    arr1[0] = 10
    arr1[1] = 'hello'

    console.log(arr1)

    const arr2 = [1, 3, 5, 7, 9, '안녕', {}, true]
    console.log(arr2)

    const arr3 = [
        'a',
        { model: 'apple', price: 1000},
        { model: 'galaxy', price: 2000},
    ]

    console.log(arr3)

    console.log(arr2[5])
    console.log(arr3[1].model)
}

// 2. 배열 출력
{
    const books = ['html', 'css', 'javascript']
    console.log(books)
    console.log(books.length) // 3
    console.log(books[0]) // 배열의 첫 요소 반환
    console.log(books[books.length - 1]) // 배열의 마지막 요소 반환

    // for문
    for(let i = 0; i < books.length; i++) {
        console.log(books[i])
    }
    console.log('--------------------')

    // for of
    for(let item of books) {
        console.log(item)
    }
    console.log('--------------------')

    // for in
    for(let i in books) {
        console.log(books[i])
    }
    console.log('--------------------')

    // forEach
    books.forEach( book => {
        console.log('📗' + book)
    })

    // map : 새로운 배열을 리턴
    const newBooks = books.map(item => `${item} 🎃`)
    console.log(newBooks)
}

// 3. 배열 매서드
{
    const books = ['html', 'css', 'javascript', 'jquery', 'react']

    // 배열을 문자열로 만들기
    console.log(books.join('/'))
    console.log(books.reverse())
    console.log(books.sort())

    // 뒤에 추가
    books.push('php')
    console.log(books)

    // 앞에 추가
    books.unshift('nodejs')
    console.log(books)

    // 뒤에서 삭제
    books.pop()
    console.log(books)

    // 앞에서 삭제
    books.shift()
    console.log(books)
}


