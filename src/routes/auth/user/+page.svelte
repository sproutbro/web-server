<script>
	export let data;
</script>

<div>id {data.user.id}</div>
<div>nickname {data.user.nickname}</div>
<div>provider {data.user.provider}</div>
<div>created_at {data.user.created_at}</div>
<a href="/auth/logout">Logout</a>
