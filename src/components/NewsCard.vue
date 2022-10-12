<script>


export default {
    name: `NewsCard`,

    props: [`item`]
}

</script>



<template>

    <div class="col-4 mt-3 p-2">
        <div class="card m-3" style="width: 15rem;">
            <img :src="item.image" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">{{item.title}}</p>
                <p>Published <strong>{{item.pusblised_at}}</strong> </p>
            </div>
        </div>
    </div>




</template>