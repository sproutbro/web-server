<script>
    export let data;
</script>

<div class="card">
    <strong>Notice</strong>
    {#if data.notices.length > 0}
        <div class="card-content">
            {#each data.notices as notice}
                <a href="/board/notice/{notice.id}">
                    <div class="post-card">
                        <div>{notice.title}</div>
                        <small>
                            👤{notice.nickname}
                            <span class="right"> 📅{notice.created_at}</span>
                        </small>
                    </div>
                </a>
            {/each}
        </div>
        <a href="/board/notice">more+</a>
    {:else}
        <p>No notices.</p>
    {/if}
</div>

<div class="card">
    <strong>QnA</strong>
    {#if data.qnas.length > 0}
        <div class="card-content">
            {#each data.qnas as qna}
                <a href="/board/qna/{qna.id}">
                    <div class="post-card">
                        <div>{qna.title}</div>
                        <small>
                            👤{qna.nickname}
                            <span class="right"> 📅{qna.created_at}</span>
                        </small>
                    </div>
                </a>
            {/each}
        </div>
        <a href="/board/qna">more+</a>
    {:else}
        <p>No QnA.</p>
    {/if}
</div>
