<script lang="ts">
    import { doLogin } from "./actions/do-login";

    export let urlToSend: string = "";
</script>

<div class="grid items-center justify-center h-screen place-items-center">
    <form method="POST" class="shadow-2xl items-center p-4 justify-center bg-slate-800 m-auto rounded-md">
        <input id="usrnm" type="text" required name="username" class="placeholder:italic text-white bg-slate-600 w-96 px-4 py-2 mt-4 rounded-md" placeholder="Username"> <br>
        <input id="psswd" type="password" required name="password" class="placeholder:italic text-white bg-slate-600 w-96 px-4 py-2 mt-4 rounded-md" placeholder="Password"> <br>

        <button on:click={() => doLogin(urlToSend)} type="button" class="bg-blue-700 hover:bg-blue-800 text-white content-center transition-colors rounded-md py-2 w-full mt-4 my-2">
            Sign in
        </button>

        <h3 class="text-gray-900"><a href="/register" class="text-blue-600 transition-colors hover:text-blue-900">Create a new account</a></h3>
    </form>
</div>