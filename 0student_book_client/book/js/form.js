//전역변수
const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.getElementById("bookTableBody");

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
    loadBooks();
});


//Form Submit 이벤트 처리하기
bookForm.addEventListener("submit", function (event) {
    //기본으로 설정된 Event가 동작하지 않도록 하기 위함
    event.preventDefault();
    console.log("Form 제출 되었음...");

    //FormData 객체생성 <form>엘리먼트를 객체로 변환
    const bookFormData = new FormData(bookForm);
    bookFormData.forEach((value, key) => {
        console.log(key + " = " + value);
    });

    const bookData = {
        title: bookFormData.get("title").trim(),
        author: bookFormData.get("author").trim(),
        isbn: bookFormData.get("isbn").trim(),
        price: parseInt(bookFormData.get("price")) || 0,
        publishDate: bookFormData.get("publishDate"),
        detailRequest: {
            description: bookFormData.get("description")?.trim() || "",
            language: bookFormData.get("language")?.trim() || "",
            pageCount: parseInt(bookFormData.get("pageCount")) || 0,
            publisher: bookFormData.get("publisher")?.trim() || "",
            coverImageUrl: bookFormData.get("coverImageUrl")?.trim() || "",
            edition: bookFormData.get("edition")?.trim() || "",
        },
    };
});

//데이터 유효성을 체크하는 함수
function validateBook(book) {
    if (!book.title) {
        alert("제목을 입력해주세요.");
        return false;
    }

    if (!book.author) {
        alert("저자를 입력해주세요.");
        return false;
    }

    if (!book.isbn) {
        alert("ISBN을 입력해주세요.");
        return false;
    }

    if (!book.price) {
        alert("가격을 입력해주세요.");
        return false;
    }

    if (!book.publishDate) {
        alert("출판일을 입력해주세요.");
        return false;
    }

    if (!book.detailRequest.description) {
        alert("설명을 입력해주세요.");
        return false;
    }

    if (!book.detailRequest.language) {
        alert("언어를 입력해주세요.");
        return false;
    }

    if (!book.pageCount) {
        alert("페이지 수를 입력해주세요.");
        return false;
    }

    if (!book.detailRequest.publisher) {
        alert("출판사를 입력해주세요.");
        return false;
    }

    if (!book.detailRequest.coverImageUrl) {
        alert("표지 이미지 URL을 입력해주세요.");
        return false;
    }

    if (!book.detailRequest.edition) {
        alert("판을 입력해주세요.");
        return false;
    }

    const pricePattern = /^[1-9][0-9]*$/; 
    if (!pricePattern.test(book.price)) {
        alert("올바른 가격 형식이 아닙니다.");
        return false;
    }

    const pageCountPattern = /^[1-9][0-9]*$/;
    if (!pageCountPattern.test(book.pageCount)) {
        alert("올바른 페이지 수 형식이 아닙니다.");
        return false;
    }

    return true;
}


//도서목록 로드하는 함수
function loadBooks() {
    console.log("도서서 목록 로드 중.....");
}