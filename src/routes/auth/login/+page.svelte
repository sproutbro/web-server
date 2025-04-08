<script>
	function loginWithKakao() {
		window.location.href = '/auth/login/kakao';
	}

	function loginWithGoogle() {
		window.location.href = '/auth/login/google';
	}

	function loginWithGithub() {
		console.log('깃허브 로그인');
	}
</script>

<div class="oauth-buttons">
	<button on:click={loginWithKakao}>🟡 Login with Kakao</button>
	<button on:click={loginWithGoogle}>🔵 Login with Google</button>
</div>
