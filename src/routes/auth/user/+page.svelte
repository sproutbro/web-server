<script>
	export let data;
</script>

<div>id {data.user.id}</div>
<form method="post">
	<label>
		nickname
		<input type="text" name="nickname" value={data.user.nickname} />
	</label>
	<button>수정</button>
</form>
<div>provider {data.user.provider}</div>
<div>created_at {data.user.created_at}</div>
<a href="/auth/logout">Logout</a>
