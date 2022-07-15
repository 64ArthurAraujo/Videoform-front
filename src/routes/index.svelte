<script lang="ts">
import { parseCookies } from "../actions/cookies";
import { onMount } from "svelte";
import Header from "../components/Header.svelte";
import { checkAuthTokenExists } from "../actions/auth";
import { isLoggedUser } from "../context/auth-context";

onMount(async () => {
    const cookies = parseCookies(document.cookie);

    for (const cookie of cookies) {
        if (cookie.key === "atoken") {
            checkAuthTokenExists(cookie.value)
        }
    }

    // Check if user is logged
    setInterval(() => {
        if (isLoggedUser === true) {
            // retrieve user information
            console.log(isLoggedUser);
            clearInterval();
        }
    }, 10 * 1000);
});

</script>

<Header />
