<template>
    <div class="card">
        <div class="card-header">
            <i class="fas fa-code"></i> Log Page
        </div>
        <div class="card-body">
            <input type="text" id="input" class="form-control" value="Test">
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
