<script>
    export let data;
</script>

<div class="card">
    <div>
        <big><strong>{data.notice.title}</strong></big>
    </div>
    <small>
        👤{data.notice.nickname}<span class="right"
            >📅{data.notice.created_at}</span
        >
    </small>
    <div class="post-content">
        <p>{data.notice.content}</p>
    </div>
</div>
