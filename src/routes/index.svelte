<script lang="ts">
    import { parseCookies } from "../actions/cookies";
    import { onMount } from "svelte";
    import Header from "../components/Header.svelte";

    let isLoggedUser = false;

    onMount(async () => {
        const cookies = parseCookies(document.cookie);

        for (const cookie of cookies) {
            if (cookie.key === "atoken") {

            }
        }

        console.log(isLoggedUser)
    });
</script>

<Header />
