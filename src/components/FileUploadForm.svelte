<script lang="ts">
    export let urlToSend: string = "";
</script>

<form method="POST" 
    action="{urlToSend}" enctype='multipart/form-data'>

    <input type="file" name="video"> <br>
    <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 my-2">
        Submit
    </button>
</form>