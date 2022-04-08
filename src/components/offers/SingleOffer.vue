<template>
  <div class="container">
      <div class="offer-layout">
          <div class="img-empresa"></div>
          <div class="data-offer">
              <h3>Desarrollador Senior Java</h3>
              <h5>Deloitte</h5>
              <div class="tags-offer">
                  <p>Tag1</p>
                  <p>Tag2</p>
                  <p>Tag3</p>
                  <p>Tag4</p>
              </div>
          </div>
          <div class="save-offer"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SingleOffer",
};
</script>

<style scoped>

    .offer-layout {
        border: 2px solid black;
        border-radius: 10px;
        width: 70%;
        height: 15%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
    }
    .img-empresa {
        border-radius: 50%;
        background-color: grey;
        width: 50px;
        height: 50px;
    }
    .data-offer {
        display: flex;
        flex-direction: column;
        gap: 2px
        ;
    }
    .tags-offer {
        display: flex;
        gap: 5px;
    }
    .save-offer {
        background-color: red;
        width: 20px;
        height: 20px;
        margin-bottom: 50px;
        margin-right: 2px;
    }
    .tags-offer p {
        border: 2px solid grey;
        border-radius: 20%;
        background-color: grey;
        color: white;
    }
    p {
        font-size: 10px;
    }
</style>