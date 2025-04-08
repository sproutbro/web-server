<script>
    export let data;
</script>

<div class="card">
    <strong>Runner</strong>
    {#if data.scores.length > 0}
        <div class="card-content">
            {#each data.scores as score}
                <div>
                    👑{score.rank} - 🎯{score.score}
                    <span class="right">👤{score.nickname}</span>
                </div>
            {/each}
        </div>
    {:else}
        <p>No scores available.</p>
    {/if}
</div>
