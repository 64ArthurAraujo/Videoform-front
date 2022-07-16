<script lang="ts">
import Header from "../components/Header.svelte";
import { onMount } from "svelte";
import { isValidUser, userInformation, type UserInformation } from "../context/auth-context";
import { doCookieActions } from "../actions/cookies";

let user: UserInformation =
{
    id: "0",
    username: "Guest"
}

onMount(async () => {
    doCookieActions();

    const updateUserInformation = 
        setInterval(() => {
            if (isValidUser === true) {
                user = userInformation;

                clearInterval(updateUserInformation);
            }
        }, 1000);
});

</script>

<Header username="{user.username}" />
