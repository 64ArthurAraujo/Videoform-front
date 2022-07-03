<script lang="ts">
    export let urlToSend: string = "";
</script>

<div class="flex items-center justify-center">
    <form method="POST" action="{urlToSend}" enctype="multipart/form-data">

        <input type="text" class="shadow mt-2" name="title" placeholder="title"> <br>
        <input type="text" class="shadow mt-2" name="description" placeholder="description"> <br>
        <input type="text" class="shadow mt-2" name="userToken" placeholder="user token"> <br>
        <input type="text" class="shadow mt-2" name="categoryId" placeholder="category id"> <br>
        
        <input type="file" name="video">

        <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 my-2">
            Submit
        </button>
    </form>
</div>