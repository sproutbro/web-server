<script>
    export let data;
</script>

<div class="card">
    <div>
        <big><strong>{data.qna.title}</strong></big>
    </div>
    <small>
        👤{data.qna.nickname}<span class="right"
            >📅{data.qna.created_at}</span
        >
    </small>
    <div class="post-content">
        <p>{data.qna.content}</p>
    </div>
</div>
