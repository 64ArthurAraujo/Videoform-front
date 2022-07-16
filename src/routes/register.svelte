<script lang="ts">
import RegisterForm from "../components/RegisterForm.svelte";
import Header from "../components/Header.svelte";
import { doCookieActions } from "../actions/cookies";
import { onMount } from "svelte";
import { isValidUser, userInformation, type UserInformation } from "../context/auth-context";


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

<RegisterForm urlToSend="http://localhost:8090/api/v0.0.1/insert/users/" />
