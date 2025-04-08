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
    {:else}
        <p>No notices.</p>
    {/if}
</div>
