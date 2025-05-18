//전역변수
const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookForm = document.getElementById('bookForm');
const bookTableBody = document.getElementById('bookTableBody');

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
    loadBooks();
});

//Form Submit 이벤트 처리하기
studentForm.addEventListener("submit", function (event) {
    //기본으로 설정된 Event가 동작하지 않도록 하기 위함
    event.preventDefault();
    console.log("Form 제출 되었음...");

    //FormData 객체생성 <form>엘리먼트를 객체로 변환
    const bookFormData = new FormData(bookForm);
    // stuFormData.forEach((value, key) => {
    //     console.log(key + ' = ' + value);
    // });

    //사용자 정의 Student 객체생성 ( 공백 제거 )
    const bookData = {
        title: formData.get('title').trim(),
        author: formData.get('author').trim(),
        isbn: formData.get('isbn').trim(),
        price: formData.get('price') ? parseInt(formData.get('price')) : null,
        publishDate: formData.get('publishDate') || null,
        detailRequest: {
            description: formData.get('description').trim() || null,
            language: formData.get('language').trim() || null,
            pageCount: formData.get('pageCount') ? parseInt(formData.get('pageCount')) : null,
            publisher: formData.get('publisher').trim() || null,
            coverImageUrl: formData.get('coverImageUrl').trim() || null,
            edition: formData.get('edition').trim() || null
        }
    };

    //유효성 체크하기
    if (!validateBook(bookData)) {
        //검증체크 실패하면 리턴하기
        return;
    }
    //유효한 데이터 출력하기
    console.log(bookData);

});

//데이터 유효성을 체크하는 함수
function validateBook(book) {
    // 필수 필드 검사
    if (!book.title) {
        alert('제목을 입력해주세요.');
        return false;
    }

    if (!book.author) {
        alert('저자를 입력해주세요.');
        return false;
    }

    if (!book.isbn) {
        alert('ISBN을 입력해주세요.');
        return false;
    }

    if (!book.price) {
        alert('가격을 입력해주세요.');
        return false;
    }

    // ISBN 형식 검사 (기본적인 영숫자 조합)
    const isbnPattern = /^[0-9X-]+$/;
    if (!isbnPattern.test(book.isbn)) {
        alert('올바른 ISBN 형식이 아닙니다. (숫자와 X, -만 허용)');
        return false;
    }

    // 가격 유효성 검사
    if (book.price !== null && book.price < 0) {
        alert('가격은 0 이상이어야 합니다.');
        return false;
    }

    // 페이지 수 유효성 검사
    if (book.bookDetail.pageCount !== null && book.bookDetail.pageCount < 0) {
        alert('페이지 수는 0 이상이어야 합니다.');
        return false;
    }

    // URL 형식 검사 (입력된 경우에만)
    if (book.bookDetail.coverImageUrl && !isValidUrl(book.bookDetail.coverImageUrl)) {
        alert('올바른 이미지 URL 형식이 아닙니다.');
        return false;
    }

    return true;
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

//학생목록 로드하는 함수
function loadBooks() {
    console.log("도서 목록 로드 중.....");
    fetch(`${API_BASE_URL}/api/books`) //Promise
        .then((response) => {
            if(!response.ok){
                throw new Error("도서 목록을 불러오는데 실패했습니다!.");
            }
            return response.json();
        })
        .then((books) => renderBookTable(books))
        .catch((error) => {
            console.log("Error: " + error);
            alert("도서 목록을 불러오는데 실패했습니다!.");
        });
}

function renderBookTable(books) {
    console.log(books);
}