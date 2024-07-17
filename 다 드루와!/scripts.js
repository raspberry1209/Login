document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 여기에 로그인 로직을 추가합니다.
    // 예: 서버에 요청 보내기, 로컬 스토리지 사용 등

    console.log('로그인 시도:', { username, password });

    // 성공적인 로그인 후 작업
    alert('아 뭐래!');
});
