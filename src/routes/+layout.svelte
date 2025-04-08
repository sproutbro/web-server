<script>
	import "../app.css";
	export let data;
</script>

<header>
	<nav class="nav-main">
		<h1 class="links"><a href="/">Game</a></h1>
		<div class="links">
			<a href="/board">Board</a>
			<a href="/score">Score</a>
			{#if data.user}
				<a href="/auth/user">User</a>
			{:else}
				<a href="/auth/login">Login</a>
			{/if}
		</div>
	</nav>
</header>

<main>
	<slot />
</main>
