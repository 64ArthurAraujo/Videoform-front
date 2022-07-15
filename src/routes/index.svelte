<script lang="ts">
import Header from "../components/Header.svelte";
import { parseCookies } from "../actions/cookies";
import { onMount } from "svelte";
import { retrieveLoggedUserInformation } from "../actions/auth";
import { isLoggedUser, userInformation } from "../context/auth-context";

let avatarUrl: string = "";
let username: string = "";

onMount(async () => {
    const cookies = parseCookies(document.cookie);

    for (const cookie of cookies) {
        if (cookie.key === "atoken") {
            retrieveLoggedUserInformation(cookie.value)
        }
    }

    const checkInfo = 
        setInterval(() => {
            if (isLoggedUser === true) {
                username = userInformation.username;

                clearInterval(checkInfo);
            }
        }, 1000);
});

</script>

<Header username="{username}" />
