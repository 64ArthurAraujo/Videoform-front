<script lang="ts">
    import Header from "../components/Header.svelte";
    import LoginForm from "../components/LoginForm.svelte";
</script>

<Header/>

<LoginForm urlToSend="http://localhost:8090/api/v0.0.1/retrieve/users/login"></LoginForm>
