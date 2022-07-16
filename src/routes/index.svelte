<script lang="ts">
import Header from "../components/Header.svelte";
import { onMount } from "svelte";
import { isValidUser, userInformation, type User } from "../context/auth-context";
import { doCookieActions } from "../actions/cookies";

let user: User =
{
    id: "0",
    username: "Guest"
}

onMount(async () => {
    doCookieActions();

    const updateUser = 
        setInterval(() => {
            if (isValidUser === true) {
                user = userInformation;

                clearInterval(updateUser);
            }
        }, 1000);
});

</script>

<Header username="{user.username}" />
