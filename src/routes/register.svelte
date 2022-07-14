<script lang="ts">
    import RegisterForm from "../components/RegisterForm.svelte";
    import Header from "../components/Header.svelte";
</script>

<Header />

<RegisterForm urlToSend="http://localhost:8090/api/v0.0.1/insert/users/" />