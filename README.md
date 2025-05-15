#### 주요 기능:
* 학생(도서) 등록 
    - (이름, 학번, 주소, 전화번호, 이메일, 생년월일)
* 학생(도서) 목록 조회
* 학생(도서) 정보 수정
* 학생(도서) 삭제
* 입력 데이터 유효성 검사
* Ajax 통신을 통한 REST API 호출

#### 사용된 기술:
* HTML5: 구조적인 마크업
* CSS3: 반응형 레이아웃과 스타일링
* JavaScript (ES6+): 동적 기능과 Ajax API 통신

#### 주요 특징:
* 점진적 개발 방식으로 단계별 완성
* 에러 처리 및 사용자 피드백
* 로딩 상태 표시
* 수정 모드와 등록 모드 전환
* 입력 필드별 실시간 유효성 검사(js)

### 각 Step 별 기능:
* step1 - html page 작성
* step2 - form 내부의 input 과 table 에 CSS 추가
* step3 
    * - form.css 파일로 분리하기
    * - form 내부의 input에 form-group, form-grid css 추가
    * - form.css 에 form-group, form-grid 클래스 추가하기
* step4
    * - javascript 코드 작성하기 시작
    * - Document Load Event 핸들링 하기
    * - Form Submit Event 핸들링 하기    
    * - 사용자가 입력한 데이터를 Form Data에 저장하기
* step5
    * - javascript code를  form.js 파일로 분리하기
    * - 입력한 데이타를 검증하는 validate() 함수 구현하기
* step6
    * - GET /api/students 서버와 통신하는 loadStudents() 구현 fetch 함수사용    
    * - renderStudentTable() 구현 table에 목록을 동적으로 출력하기
* step7
    * - studentData 객체 구조 변경하기 및 validate() 함수 수정
    * - POST api/students 서버와 통신하는 createStudent() 함수 구현
* step8
    * - DELETE /api/students/1 서버와 통신하는 deleteStudent() 함수 구현
* step9
    * - 수정,삭제 버튼의 스타일 추가하기
    * - student 수정하기 전에 데이터 조회 먼저하기
    * - GET api/students/1 student 조회하는 editStudent() 함수 구현
    * - 수정 모드일때 취소 버튼 보여주고, resetForm() 함수 구현하고 연결하기
    * - PUT api/students/1 student 수정하는 updateStudent() 함수 구현
* step10
    * - 성공 및 실패 메시지를 alert() 대신 formError <span> 에 보여주기
    * - showSuccess() / showError() / clearMessages() 함수 추가
    * - loadStudents() 목록 불러오기 실패한 경우에 처리