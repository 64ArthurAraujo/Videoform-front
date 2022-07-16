<script lang="ts">
import Header from "../components/Header.svelte";
import LoginForm from "../components/LoginForm.svelte";
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

<LoginForm urlToSend="http://localhost:8090/api/v0.0.1/retrieve/users/login"></LoginForm>
