<script lang="ts">
    import Header from "../components/Header.svelte";
    import FileUploadForm from "../components/FileUploadForm.svelte";
</script>

<Header/>

<FileUploadForm urlToSend="http://localhost:8090/api/v0.0.1/insert/videos">
</FileUploadForm>